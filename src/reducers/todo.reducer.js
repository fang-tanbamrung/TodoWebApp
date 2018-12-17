import { todoConstants } from '../constants/todo.constant';

const { ADD_TODO, TOGGLE_STATE, DELETE_TODO, SAME_DAY, LOAD_TODO, CLEAR_TODO,
        UPDATE_TODO_FAILURE, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS } = todoConstants;

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
        case LOAD_TODO:
            return Object.assign([], state, action.data.todo)
        case CLEAR_TODO:
            return []
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

const initialUpdateState = {
    state:''
}

export const updateTodo = (state = initialUpdateState, action = {}) => {
    switch(action.type){
        case UPDATE_TODO_REQUEST:
            return Object.assign({}, state, {state: 'request'})
        case UPDATE_TODO_SUCCESS:
            return Object.assign({}, state, {state: 'sucess'})
        case UPDATE_TODO_FAILURE:
            return Object.assign({}, state, {state: 'failure'})
        default:
            return state
    }
}
