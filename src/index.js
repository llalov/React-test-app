import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ClientApp/App';
import * as serviceWorker from './serviceWorker';
import configureStore from "./redux/configureStore";
import { Provider } from 'react-redux';
const store = configureStore(window.__STATE__);

ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>,
    document.getElementById('root')
)
serviceWorker.unregister();
