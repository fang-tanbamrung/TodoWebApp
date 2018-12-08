import { searchConstants } from '../constants/search.constant';


const { SHOW_DATE_SEARCH, DATE_SEARCH, TODO_SEARCH, SHOW_TEXT_SEARCH } = searchConstants


export const dateSearch = (date) => {
    return {
        type:DATE_SEARCH,
        date
    }
}

export const showDateSearh = () => {
    return{
        type:SHOW_DATE_SEARCH,
    }
}

export const showTextSearch = () => {
    return{
        type:SHOW_TEXT_SEARCH
    }
}

export const todoSearch = (text) => {
    return{
        type: TODO_SEARCH,
        text
    }
}
