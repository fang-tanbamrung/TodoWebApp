import React from 'react';
import TodoForm from './TodoForm';


const List = ({ todo,onClickAction,name,width,onDel }) =>{
    
        
        return(
            <div className=' ma3 ba br2 b--white-60 bg-white-30' style={{width:width}}>
                <h1 className='f2 black flex justify-center courier'>
                    {name}
                </h1>
                <div className=''>
                    
                    {
                        todo.map(item => {
                        return(
                            <div className = '' key = {item.id}>
                                    <TodoForm date = {item.dueDate} title={item.todo} onToggleClick={() => onClickAction(item.id)} name={name} onCancelClick = {() => onDel(item.id)}/>

                            </div>
                        )
                        })
                    }
                    <TodoForm date = {'10/10/2010'} title={'asd'} onToggleClick={() => onClickAction(1)} name={name} onCancelClick = {() => onDel(1)}/>

                </div>
            </div>
        )

}

export default List;