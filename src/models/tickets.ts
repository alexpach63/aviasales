import {observable, computed, action} from 'mobx';
import {Ticket as TicketType} from '../types/entities';
import {curFormat} from '../utils/global';
import axios from 'axios';

import AppStore from './index';

class Ticket {
    constructor(store: any) {
        Object.keys(store).forEach((key) => {
            (this as any)[key] = store[key]
        })
    }

    price: number;
    stops: number;

    @computed 
    get priceFormatted(): string {
        // представим что мы стучим куда-то за курсом, ну или берем из стораджей, но тут захардкодим
        const [usd, eur] = [68, 78];
        const {currency} = AppStore.app;
        let result;
        switch (currency){
            case 'usd':
                result = Math.ceil(this.price / usd * 100) / 100
            break;
            case 'eur':
                result = Math.ceil(this.price / eur * 100) / 100
            break;
            default:
                result = this.price
        }

        result = curFormat(currency, result);
        return result;
    }
}

export class Tickets {

    @observable all: Ticket[] = []
    @observable loading = false;

    @computed
    get existStops(): string[] {
        let stops = this.all.reduce((res, cur) => {
            const curStop = cur.stops.toString()
            if (!res.includes(curStop)) {
                res.push(curStop)
            }
            return res;
        }, []).sort();
        
        if (stops.length > 0) {
            stops.unshift('all')
        }
        return stops;
    }

    @computed
    get tickets() {
        // можно еще стабильную сортировочку добавить, 
        // чтоб не скакало и не шокировало юзеров, если бывают билеты по одной цене
        function compare(a: any, b: any) {
            return a.price < b.price ? -1
                : a.price > b.price ? 1
                : 0;
        }
        return this.all.filter(ticket => {
            return AppStore.app.stops.includes(ticket.stops.toString())
        }).sort(compare)
    }

    private fetchTickets = () =>
        axios.get('/static/tickets.json').then(({data}): TicketType[] => data.tickets)

    @action
    getTickets() {
        this.all = []
        this.loading = true
        this.fetchTickets().then(this.fetchTicketsSuccess, this.fetchTicketsError)
    }

    @action.bound
    fetchTicketsSuccess(tickets: TicketType[]) {
        this.all = tickets.map(ticket => new Ticket(ticket))
        this.loading = false

        setTimeout(() => {
            AppStore.app.initialized = true;
        }, 2000)
    }

    @action.bound
    fetchTicketsError() {
        this.loading = false
    }
}

export default Tickets;
