import * as React from 'react';

import * as styles from './Layout.scss';

import Tickets from '../../containers/Tickets/Tickets';
import StopsFilter from '../../containers/StopsFilter/StopsFilter';
import CurrencySwitcher from '../../containers/CurrencySwitcher/CurrencySwitcher';
import { observer, inject } from 'mobx-react';


interface Props {
    app?: any;
}

@inject('app')
@observer
class Layout extends React.Component<Props> {
    render() {
        const {
            initialized
        } = this.props.app;
        
        // тут на снятие лоадера можно еще транзишн накинуть
        return !initialized ?
            <div className={styles.loader}>
                LOADING...
            </div>
        :(
            <div className={styles.container}>
                <div className={styles.header}>
                    <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#49aaf6" fill-rule="evenodd">
                            <path d="M23 20.023C23 23.877 19.885 27 16.041 27h-2.082C10.115 27 7 23.877 7 20.023v-7.046C7 9.123 10.115 6 13.959 6h2.082C19.885 6 23 9.123 23 12.977v7.046zM28.821 9H30V4.937C30 1.912 28.051 0 25.026 0H4.974C1.949 0 0 1.912 0 4.937V9h1.179C3.381 9 5 10.906 5 13.004v3.992C5 19.094 3.381 21 1.179 21H0v4.062C0 28.088 1.949 30 4.974 30h20.052C28.051 30 30 28.088 30 25.062V21h-1.179C26.619 21 25 19.094 25 16.996v-3.992C25 10.906 26.619 9 28.821 9z"/>
                            <path d="M20 16.996C20 19.094 17.81 21 15.606 21h-1.213C12.19 21 10 19.094 10 16.996v-3.992C10 10.906 12.19 9 14.393 9h1.213C17.81 9 20 10.906 20 13.004v3.992zM16.043 7h-2.211C10.625 7 8 9.926 8 13.134v6.732C8 23.074 10.625 26 13.832 26h2.211C19.25 26 22 23.074 22 19.866v-6.732C22 9.926 19.25 7 16.043 7z"/>
                            <path d="M15.464 18.914h-.123c-1.674 0-3.245-.968-3.245-2.69v-1.628S12.094 14 11.544 14c-.548 0-.544.596-.544.596v1.627C11 18.543 13.064 20 15.341 20h.123s.536-.009.536-.532c0-.526-.536-.554-.536-.554"/>
                        </g>
                    </svg>
                </div>
                <div className={styles.inner}>
                    <div className={styles.informer}>
                        <div className={styles.informer_caption}>Валюта</div>
                        <CurrencySwitcher />
                        <div className={styles.informer_caption}>Количество пересадок</div>
                        <StopsFilter />
                    </div>
                    <div className={styles.tickets}>
                        <Tickets />
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;
