import './DayNightSwitch.css';

import React, { useState } from 'react';

export default function DayNightSwitch() {
    const [night, setDayTime] = useState(false);
    let nightTime = () => night ? setDayTime(false) : setDayTime(true);
    return (
        <div>
            {night ? <div className='nightDiv'><p> Es ist Nacht! 🌚 </p> <button onClick={nightTime}>Wechsel zu Tag</button></div > : <div className='dayDiv'><p> Es ist Tag! ☀️ </p> <button onClick={nightTime}>Wechsel zu Nacht</button></div >}
        </div>
    );
}
