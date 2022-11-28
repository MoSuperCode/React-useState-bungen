import './Counter.css';
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className='counter'>
            <h1> Counter {count}</h1>
            <button className='counterButton' onClick={() => setCount(count + 1)}>+</button>
            <button className='counterButton' onClick={() => setCount(count - 1)}>-</button>
            <button className='counterButton' onClick={() => setCount(count - count)}>Reset</button>
        </div>
    );
}

export default Counter;
