import * as React from 'react';
import Ticket from '../../components/Ticket/Ticket';
import {inject, observer} from 'mobx-react';
import {Ticket as TicketProp} from '../../types/entities';

interface Props {
    tickets?: {
        tickets: TicketProp[];
    }
}

@inject('tickets')
@observer
class Tickets extends React.Component<Props> {
    render() {
        const {
            tickets,
        } = this.props.tickets;
        return tickets.length ? (
            <>
                {tickets.map((ticket) =>
                    <Ticket 
                        key={`${ticket.origin}${ticket.destination}${ticket.price}`}
                        ticket={ticket}
                    />
                )}
            </>
        ) : <div>По вашим запросам не найдено ни одного билета</div>
    }
}

export default Tickets;
