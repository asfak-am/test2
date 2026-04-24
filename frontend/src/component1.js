import React from 'react';

function component1(props) {
    return (
        <div>
            <button onClick={props.onClick}>Click me</button>
        </div>
    );
}

export default component1;