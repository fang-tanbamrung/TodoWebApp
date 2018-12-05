import {
        ADD_TODO,
        TOGGLE_STATE,
        DELETE_TODO,
        SEARCH_IS_CLICK,
        SHOW_SEARCH,
        SAME_DAY
        } from './constants';

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

const initialState = {
    showSearch:false,
    date:''
}

export const Search = (state = initialState,action = {}) => {
    switch(action.type){
        case SHOW_SEARCH:
            return Object.assign({}, state,{showSearch:!state.showSearch});
        case SEARCH_IS_CLICK:
            return Object.assign({}, state,{date:action.date});
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

// const initialFilterState = {
//     filter:''
// }

// export const listFilter = (state = initialFilterState, action={}) => {
//     switch(action.type){
//         case LIST_FILTER:
//             return Object.assign({}, state, {filter:action.filter})
//         case DUE_DATE_FILTER:
//             return Object.assign({}, state, {filter:action.filter})
//         default:
//             return state
//     }
// }

