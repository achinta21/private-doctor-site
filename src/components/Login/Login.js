import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const{singInUsinGoogle}=useAuth();
    return (
        <div className="login">
            <h1 className="mt-5">Login page</h1>
           <form onSubmit>
           <input className="mt-4 mb-2 w-25" type="text" placeholder="email"/>
                 <br />
                <input className="mb-2 w-25"  type="password" name="" id="" placeholder="password"/>
                <br />
                <input className="mb-2 px-4 fw-bold bg-warning rounded"  type="submit" value="submit" />
                <br />
                <p>New User <Link to="/register">Create your Account</Link></p>
            </form>
            
            <button onClick={singInUsinGoogle} className="btn bg-warning mt-2 mb-4 fw-bold">Google Sign in</button>
        </div>
    );
};

export default Login;