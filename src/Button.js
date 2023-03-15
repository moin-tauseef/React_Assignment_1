import React from 'react';
import './Button.css';

function Button ({add,label}) {
    //console.log(props,'props')
    return (
        <button onClick={add}>{`${label || 'Default'}`}</button>
    )
}

export default Button;