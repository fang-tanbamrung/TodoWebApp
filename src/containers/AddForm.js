import React from 'react';
import { connect } from 'react-redux';
import { addTodo, sameDay } from '../actions/todo.actions';

const mapStateToProps = (state) => {
    return{
        checked : state.sameDay.checked,
        id : state.todo.length,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onAddTodo:(text,date,id) => dispatch(addTodo(text,date,id)),
        onCheck:(checked) => dispatch(sameDay(checked))
    }
}


const AddForm = props => {
    const { onAddTodo, checked, onCheck, id } = props;
    let input;
    let date;
    
    return(
        <div className='mt3'>
            <form className ='flex justify-center flex-column white-70 items-center' onSubmit = {e => {
                    e.preventDefault()
                    if(!input.value.trim()){
                        return
                    }
                    if(!date.value){
                        alert('set due date')
                        return
                    }
                    onAddTodo(input.value.trim(),date.value,id);
                    input.value = ''
                    if(!checked){
                        date.value = ''
                    }
                }} >
                <div className = 'ma1'>
                    {`What's todo`}
                    <input className='br2 mr2 ml2' ref = {node => input=node}/>
                </div>
                <div className = 'ma1'>
                    {'Due date'}
                    <input className='br-pill mr2 ml2' type='date' ref = {node => date=node}/>
                </div>
                <div>
                    <input className='mr1' type='checkbox' onChange={e => onCheck(e.target.checked)}/>
                    {'Same day'}
                    <button className ='pointer ml2 dim br2 tc'>
                        {'Add'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(AddForm);