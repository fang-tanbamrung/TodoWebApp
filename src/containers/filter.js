import { filterConstants } from '../constants/filter.constants';

const { TODO_FILTER, DONE_FILTER, DUE_DATE_FILTER } = filterConstants;

export const isDoneFilter = (todos,filter) => {
    const todo = todos.filter(item => item.isDelete === false);
    switch(filter){
        case DONE_FILTER:
            return todo.filter(item => item.isDone === true);
        case TODO_FILTER:
            return todo.filter(item => item.isDone === false);
        default:
            return todo
    }
}

export const dueDateFilter = (todo,filter,date) => {
    if(date === ''){
        return todo
    }
    switch(filter){
        case DUE_DATE_FILTER:
            return todo.filter(item => item.dueDate === date);
        default:
            return todo
    }
}

export const TodoFilter = (todo = '', text = '') => {
    if (text === '' || todo === [] ){
        return todo
    }
    console.log(todo)
    console.log(text)
    return todo.filter(item => { 
        return item.todo.toLowerCase().includes(text.toLowerCase())
    });
}