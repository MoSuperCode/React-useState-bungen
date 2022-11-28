import './Input.css';
import React, { useState } from 'react';

export default function Input() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setName] = useState('');
    const [eMail, setEmail] = useState('');

    const refresh = event => {
        if (event.target.id === "1") {
            setFirstName(event.target.value);
        }
        if (event.target.id === "2") {
            setName(event.target.value);
        }
        if (event.target.id === "3") {
            setEmail(event.target.value);
        }
    };
    return (
        <div className='inputDiv'>
            <input onChange={refresh} id="1" placeholder='Vorname'></input>
            <input onChange={refresh} id="2" placeholder='Nachname'></input>
            <input onChange={refresh} id="3" placeholder='Email'></input>
            <p>Vorname: {firstName}</p>
            <p>Nachname: {lastName}</p>
            <p>Email: {eMail}</p>
        </div>
    );
}
/* { }
{ }
{ } */