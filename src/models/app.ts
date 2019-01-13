import {observable, action} from 'mobx';
import {Currency} from '../types/entities';

import AppStore from './index';

export class App {

    @observable initialized = false;
    @observable currency: Currency = 'rub';
    @observable stops: (string|number)[] = ['0'];

    @action
    changeCurrency = (currency: Currency) => {
        this.currency = currency;
    }
    @action
    changeStops = (stop: string, only: boolean = false) => {
        if (stop === 'all') {
            if (this.stops.includes('all')) {
                this.stops = [];
            } else {
                this.stops = AppStore.tickets.existStops;
            }
        } else if (only) {
            this.stops = [stop]
        } else if (this.stops.includes(stop)) {
            this.stops = this.stops.filter(curStop => {
                return curStop !== stop.toString()
            });
        } else {
            this.stops.push(stop)
        }
    }
}

export default App;
