import React from 'react';

const Scroll = (props) => {
    return(
        <div className='' style={{overflowY:'scroll',height:'65vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll;