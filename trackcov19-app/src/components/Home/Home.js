import React, {useState} from 'react';
import './Home.css';


export default function Home(props) {
    
    return(
        <div>
            <h1>Hello {props.name}</h1>
        </div>
    );
}