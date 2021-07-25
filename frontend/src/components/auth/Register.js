import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [loginState, saveLoginState] = useState({
        username: '',
        email: '',
        password: '',
        confirm: ''
    });

    //Apply destructuring 
    const {username, email, password, confirm} = loginState;

    const onChangeInput = e => {
        saveLoginState({
            ...loginState,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //Validate emtpy fields

        //Validate password min length

        //Validate password and confirm are the same

        //Pass to the acction 
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sobra-dark">
                <h1>Register</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="username">Name</label>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Name..."
                            value={username}
                            onChange={onChangeInput}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email..."
                            value={email}
                            onChange={onChangeInput}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password..."
                            value={password}
                            onChange={onChangeInput}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input 
                            type="password" 
                            name="confirm" 
                            placeholder="Confirm Password..."
                            value={confirm}
                            onChange={onChangeInput}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Register" />
                    </div>
                </form>
                <br/>
                <Link to="/">
                    Login
                </Link>
            </div>
        </div>
     );
}
 
export default Register;