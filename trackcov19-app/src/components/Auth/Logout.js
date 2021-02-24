import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';


export default function Logout({ setLoggedIn }) {

    const history = useHistory();

    useEffect(() => {
        console.log("logout triggered");
        sessionStorage.clear();
        setLoggedIn(false);
        history.push('/login');
        window.location.href = '/login';
    });

    return (
        <div></div>
    )
}