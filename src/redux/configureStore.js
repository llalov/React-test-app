import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

const client = axios.create({
    baseURL: 'http://localhost:4000/rest',
    responseType: 'json'
});


export default function configureStore (initialState = {}) {
    return createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, axiosMiddleware(client))),
    );
}