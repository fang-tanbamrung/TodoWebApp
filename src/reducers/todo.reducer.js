import { todoConstants } from '../constants/todo.constant';

const { ADD_TODO, TOGGLE_STATE, DELETE_TODO, SAME_DAY } = todoConstants;

const initialTodo = []

export const todo = (state = initialTodo,action ={}) => {
    switch(action.type){
        case ADD_TODO:
            return [...state,{
                id:action.id,
                todo:action.text,
                isDone:false,
                isDelete:false,
                dueDate:action.date
                }]
        case TOGGLE_STATE:
            return state.map(todo => (
                todo.id === action.id?
                {...todo,
                isDone:!todo.isDone}
                :todo
            ))
        case DELETE_TODO:
            return state.map(todo => 
                todo.id === action.id?
                {...todo,
                isDelete:true}
                :todo)
        default:
            return state
    }
}


const initialChecked = {
    checked:false
}

export const sameDay = (state = initialChecked, action = {}) => {
    switch(action.type){
        case SAME_DAY:
            return Object.assign({}, state, {checked:action.checked})
        default:
            return state
    }
}
