import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'mobx-react';

import Layout from './containers/Layout/Layout';
import store from "./models";

import './global.scss';

class App extends React.Component {
    render() {
        return (
            <Provider {...store}>
               <Layout /> 
            </Provider>
        )
    }
    componentDidMount() {
        store.tickets.getTickets();
    }
}


render(
    <App />,
    document.getElementById('root')
)
