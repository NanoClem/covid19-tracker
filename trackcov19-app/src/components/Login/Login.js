import React, {Component} from 'react';
import './Login.css';


class Login extends Component {

    render() {
        return(
            <div className='login-box'>
                <h1>Login</h1>
                <form>
                    <label>
                        <p>Username</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" />
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;