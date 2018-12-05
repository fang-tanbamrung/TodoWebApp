import React from 'react';

const Scroll = (props) => {
    return(
        <div className='' style={{overflowY:'scroll',height:'750px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;