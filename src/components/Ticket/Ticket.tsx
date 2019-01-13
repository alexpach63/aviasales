import * as React from 'react';
import * as classnames from 'classnames';

import * as styles from './Ticket.scss';

import {num2str} from '../../utils/global';

import Button from '../Button/Button';
import { observer } from 'mobx-react';

interface Props {
    ticket: {
        origin?: string;
        origin_name?: string;
        destination?: string;
        destination_name?: string;
        departure_date?: string;
        departure_time?: string;
        arrival_date?: string;
        arrival_time?: string;
        carrier?: string;
        stops?: number;
        priceFormatted?: string;
    }
}

@observer
class Ticket extends React.Component<Props> {
    buy() {
        alert('купили');
    }
    render() {
        const {
            origin,
            origin_name,
            destination,
            destination_name,
            departure_date,
            departure_time,
            arrival_date,
            arrival_time,
            stops,
            priceFormatted,
        } = this.props.ticket;

        const className = classnames(
			styles.container,
        );
        
        const imageStyle = {
            backgroundImage: 'url(/static/Logo.png)',
        }

        return (
            <div className={className}>
                <div className={styles.left}>
                    <div className={styles.company} style={imageStyle} />
                    <Button orange onClick={this.buy}>Купить<br/>за {priceFormatted}</Button>
                </div>
                <div className={styles.right}>
                    <div className={`${styles.from} ${styles.lol}`}>
                        <div className={styles.time}>{departure_time}</div>
                        <div className={styles.address}>{origin}, {origin_name}</div>
                        <div className={styles.date}>{departure_date}</div>
                    </div>
                    <div className={styles.stops}>
                        {!!stops && 
                            <div className={styles.stopsCount}>{stops} {num2str(stops, ['пересадка', 'пересадки', 'пересадок'])}</div>
                        }
                        <div className={styles.stopsline}></div>
                    </div>
                    <div className={styles.to}>
                        <div className={styles.time}>{arrival_time}</div>
                        <div className={styles.address}>{destination_name}, {destination}</div>
                        <div className={styles.date}>{arrival_date}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ticket;
