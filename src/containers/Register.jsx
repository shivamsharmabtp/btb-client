import React from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Header from './../components/Header';
import { useState } from 'react';
import constants from '../constants';

export default () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const register = async () => {
        try {
            const response = await fetch(constants.BASE_PATH() + '/user/register', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                method : 'POST',
                body : JSON.stringify({name, email, password})
            })
            window.location = '/';
        } catch (error) {
            setErrorText(error);
        }
    }

    return (
        <>
        <Header />
        <div className="flex flex-col mt-8 ml-4 w-64 h-64 justify-between">
            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleNameChange} />
            <TextField id="outlined-basic" label="Email" variant="outlined" onChange={handleEmailChange}/>
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" onChange={handlePasswordChange}/>
            <div className="errorText">{errorText}</div>
            <button onClick={register}>SignIn</button>
        </div>
        </>
    )
}