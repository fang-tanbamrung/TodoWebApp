import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import 'tachyons'

import Header from './components/headerBar';
import * as serviceWorker from './serviceWorker';
import { todo, sameDay } from './reducers/todo.reducer';
import { Search } from './reducers/search.reducer';
import { authentication, register } from './reducers/user.reducer'
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({todo,Search,sameDay,authentication,register});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

ReactDOM.render(<Provider store = {store}>
                    <Header/>
                </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();