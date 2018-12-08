import { todoConstants } from '../constants/todo.constant';

let nextTodoId = 0
const { ADD_TODO, TOGGLE_STATE, DELETE_TODO,SAME_DAY } = todoConstants;

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

