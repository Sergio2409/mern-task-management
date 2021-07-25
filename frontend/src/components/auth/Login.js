import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [loginState, saveLoginState] = useState({
        email: '',
        password: ''
    });

    //Apply destructuring 
    const {email, password} = loginState;

    const onChangeInput = e => {
        saveLoginState({
            ...loginState,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //Validate emtpy fields

        //Pass to the acction 
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sobra-dark">
                <h1>Login</h1>
                <form
                    onSubmit={onSubmit}
                >
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
                        <input type="submit" className="btn btn-primario btn-block" value="Login" />
                    </div>
                </form>
                <br/>
                <Link to="/register">
                    Register
                </Link>
            </div>
        </div>
     );
}
export default Login;
