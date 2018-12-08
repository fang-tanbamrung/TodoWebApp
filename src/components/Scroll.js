import React from 'react';

const Scroll = (props) => {
    return(
        <div className='' style={{overflowY:'scroll',height:'730px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;