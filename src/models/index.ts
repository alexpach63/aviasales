import App from './app';
import Tickets from './tickets';

const Store = {
    app: new App(),
    tickets: new Tickets()
}

export default Store;
