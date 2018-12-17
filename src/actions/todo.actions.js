import { todoConstants } from '../constants/todo.constant';

const { ADD_TODO, TOGGLE_STATE, DELETE_TODO, SAME_DAY, LOAD_TODO,
        UPDATE_TODO_FAILURE, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS } = todoConstants;

export const addTodo = (text,date,id) => {
    return{
        type:ADD_TODO,
        id,
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

export const loadTodo = (data) => {
    return{
        type:LOAD_TODO,
        data
    }
}

const api = 'http://localhost:3000';

export const updateTodo = (email, todo) => {
    return dispatch => {
        dispatch({type: UPDATE_TODO_REQUEST})

        fetch(`${api}/todo`,{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                email:email,
                todo:todo
            })
        })
            .then(res => res.json())
            .then(data => {
                if(data === 'success'){
                    dispatch({type: UPDATE_TODO_SUCCESS })
                }
            })
            .catch(err => dispatch({type: UPDATE_TODO_FAILURE, err: err}))
    }
}

