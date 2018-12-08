import { searchConstants } from '../constants/search.constant';

const { SHOW_DATE_SEARCH, DATE_SEARCH, TODO_SEARCH, SHOW_TEXT_SEARCH } = searchConstants

const initialState = {
    showDateSearch:false,
    showTextSearch:false,
    date:'',
    text:''
}

export const Search = (state = initialState,action = {}) => {
    switch(action.type){
        case SHOW_DATE_SEARCH:
            return Object.assign({}, state, {showDateSearch:!state.showDateSearch});
        case DATE_SEARCH:
            return Object.assign({}, state, {date:action.date});
        case TODO_SEARCH:
            return Object.assign({}, state, {text:action.text});
        case SHOW_TEXT_SEARCH:
            return Object.assign({}, state, {showTextSearch:!state.showTextSearch});
        default:
            return state
    }
}