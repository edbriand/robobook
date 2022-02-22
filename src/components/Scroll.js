import React from 'react';

const Scroll = (props) => {
    return (
        <div className= 'scrollbar-hidden' style={{overflowY: 'scroll', height: '87vh'}}>
            {props.children} 
        </div>
    )
}

export default Scroll;