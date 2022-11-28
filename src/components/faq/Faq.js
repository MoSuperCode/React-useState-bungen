import './Faq.css';

import React, { useState } from 'react';


export default function Faq() {
    const [answer, setVisibility] = useState(false);
    let hidden = () => {
        answer ? setVisibility(false) : setVisibility(true);
    };
    return (
        <div>
            <div className='faqDiv'>
                <p className='faqP'>Why is React great? </p>
                <button onClick={hidden}>.</button>
            </div>
            {answer ? <div className='faqDiv'><p className='faqP'>Fast Learning Curve</p></div> : null}
        </div>
    );
}
