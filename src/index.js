import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import 'tachyons'

import Todo from './containers/Todo';
import * as serviceWorker from './serviceWorker';
import { todo, sameDay } from './reducers/todo.reducer';
import { Search } from './reducers/search.reducer';
import './index.css';

const rootReducer = combineReducers({todo,Search,sameDay});
const store = createStore(rootReducer)

ReactDOM.render(<Provider store = {store}>
                    <Todo/>
                </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();