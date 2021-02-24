import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';


export default function Login({ setLoggedIn }) {

    // STATE AND SETTERS
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    /**
     * Handle errors for api requests
     * @param {*} err 
     */
    const handleErrors = (response) => {
        if (!response.ok)
            throw Error('');
        return response.json();
    }

    /**
     * Handle api call for user login
     * @param {JSON} credentials 
     */
    const handleLogin = async (credentials) => {
        let res = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(handleErrors)
            .catch(err => console.log(err));
        return await res;
    }

    /**
     * Handle login form submit
     * @param {*} event 
     */
    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = await handleLogin({ 
            username: username,
            password: password   
        })
            .then(data => {
                if (data) {
                    sessionStorage.setItem('token', JSON.stringify(data));   // set token in session
                    setLoggedIn(true);
                    history.push('/profile');
                }
            });
    }

    // RENDER COMPONENT
    return (
        <div className='login-box'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input
                        autoFocus
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );

}