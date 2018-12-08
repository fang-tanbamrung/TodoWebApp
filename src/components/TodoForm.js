import React from 'react';

import back from './image/back.png';
import next from './image/next.png';
import cancel from './image/cancel.png';


const TodoForm = ({title='title',name,onCancelClick,onToggleClick,date}) => {
    date = date===undefined||date === ''?`Didn't set`:date
    return(
        <div className='ma2 pa2 ba br2 white-70 bg-black-40'>
            <div className='flex'>
                <div className='w-90 yellow'>
                        {`Due date : ${date}`}  
                </div>
                <div className=' flex justify-end items-start mb2' width='20px'>
                    <div className=' ml2 ba br-100 bg-red pl1 pr1 dim pointer b--black' onClick={onCancelClick}>
                        <img alt='cancel' src={cancel} width='10px' height='auto'/>
                    </div>

                </div>
            </div>
            <div className='ba br2 w-100 flex items-start pa2 light-green'>
                    {title}
            </div>
            <div>
                <div className='flex justify-start pa1' onClick={onToggleClick}>
                    {name === 'DONE'?
                    <div className='flex items-center dim'>
                        <div className='b--black ba br2 bg-blue pt1 pl1 pr1 pointer'>
                            <img alt='back' src={back} width='25px' height='15px'/>
                        </div>
                    </div>
                    :<div className='flex items-center dim'>
                        <div className='b--black ba br2 bg-blue pt1 pl1 pr1 pointer' >
                            <img alt='next' src={next} width='25px' height='15px'/>
                        </div>
                    </div>}
                </div>
            </div>     

        </div>
    )
}

export default (TodoForm);