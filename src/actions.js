import {
        ADD_TODO,
        TOGGLE_STATE, 
        DELETE_TODO,
        SEARCH_IS_CLICK,
        SHOW_SEARCH,
        SAME_DAY,
    } from './constants';

let nextTodoId = 0

export const addTodo = (text,date) => {
    return{
        type:ADD_TODO,
        id:nextTodoId++,
        text,
        date
    }
}

export const toggleState = (id) => {
    return{
        type:TOGGLE_STATE,
        id
    }
}

export const delTodo = (id) => {
    return{
        type:DELETE_TODO,
        id
    }
}

export const sameDay = (checked) => {
    return{
        type:SAME_DAY,
        checked
    }
}

export const isSearchClick = (date) => {
    return {
        type:SEARCH_IS_CLICK,
        date
    }
}

export const showSearh = () => {
    return{
        type:SHOW_SEARCH,
    }
}

