import React from 'react';
import { connect } from 'react-redux';

import { toggleState, delTodo } from '../actions/todo.actions';
import { filterConstants } from '../constants/filter.constants';
import List from '../components/List';
import AddForm from './AddForm';
import { isDoneFilter, dueDateFilter, TodoFilter } from './filter';
import Scroll from '../components/Scroll';
import Search from './Search';
import Footer from '../components/Footer/Footer';

const { DONE_FILTER, TODO_FILTER, DUE_DATE_FILTER } = filterConstants

const mapDispatchToProps = dispatch => {
    return{
        
        onToggle:(id) => dispatch(toggleState(id)),
        onDelTodo:(id) => dispatch(delTodo(id)),
    }
}

const mapStateToProps = state => {
    return{
        todo:TodoFilter(dueDateFilter(
            isDoneFilter(state.todo, TODO_FILTER)
            ,DUE_DATE_FILTER,state.Search.date),state.Search.text),
        done:TodoFilter(dueDateFilter(
            isDoneFilter(state.todo, DONE_FILTER)
            ,DUE_DATE_FILTER,state.Search.date),state.Search.text)
    }
}

class Todo extends React.Component{
    render(){
        const { onToggle, todo,done, onDelTodo } = this.props
        return(
            <div className=''>
                
                <AddForm/>
                <div className='flex justify-start ml2'>
                    <Search />
                </div>
                <Scroll>
                    <div className = 'flex flex-wrap justify-center'>
                        <List todo ={todo} onClickAction={onToggle} name={'TODO'} width={'46%'} onDel = {onDelTodo}/>
                        <List todo ={done} onClickAction={onToggle} name={'DONE'} width={'46%'} onDel = {onDelTodo}/>
                    </div>
                </Scroll>
                <Footer/>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);