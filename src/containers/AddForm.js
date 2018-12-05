import React from 'react';
import { connect } from 'react-redux';
import {addTodo, sameDay} from '../actions';

const mapStateToProps = (state) => {
    return{
        checked:state.sameDay.checked
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onAddTodo:(text,date) => dispatch(addTodo(text,date)),
        onCheck:(checked) => dispatch(sameDay(checked))
    }
}

const AddForm = props => {
    const {onAddTodo, checked, onCheck} = props;
    let input;
    let date;
    return(
        <div>
            <form className ='flex justify-center white-70 items-center' onSubmit = {e => {
                    e.preventDefault()
                    if(!input.value.trim()){
                        return
                    }
                    if(!date.value){
                        alert('set due date')
                        return
                    }
                    onAddTodo(input.value.trim(),date.value)
                    input.value = ''
                    if(!checked){
                        date.value = ''
                    }
                }} >
                    {`What's todo`}
                    <input className='br-pill w-40 mr2 ml2' ref = {node => input=node}/>
                    {'Due date'}
                    <input className='br-pill mr2 ml2' type='date' ref = {node => date=node}/>
                    <input className='mr1' type='checkbox' onChange={e => onCheck(e.target.checked)}/>
                    {'Same day'}
                    <button className ='pointer ml2 dim br2'>
                        Add
                    </button>
            </form>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(AddForm);