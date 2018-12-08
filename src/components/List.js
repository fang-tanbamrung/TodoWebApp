import React from 'react';

import TodoForm from './TodoForm';


const List = ({ todo,onClickAction,name,width,onDel }) =>{
    
        
        return(
            <div className='mt3 mb3 ml2 mr2 ba br2 b--white-60 bg-white-30' style={{width:width}}>
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
                    
                </div>
            </div>
        )

}

export default List;