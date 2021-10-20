import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";

import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const [name,setName]=useState('')
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');
    const[isLogin,setIsLogin]=useState(false)
     const auth=getAuth();

     const toggleLogin=e=>{
         setIsLogin(e.target.checked)
     }
     const handleNameChange=e=>{
        setName(e.target.value);
     }
    const handleEmailChange=e=>{
        setEmail(e.target.value)
    };
    const handlePasswordChange=e=>{
        setPassword(e.target.value)
    };
    const handleRegister=e=>{
        e.preventDefault();
        if(password.length<6){
            setError('password must be at least 6 characters long')
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('password must contain 2 uppercase')
            return;
        };
       
        const processLogin=(email,password)=>{
            signInWithEmailAndPassword(auth,email,password)
            .then(result=>{
                const user=result.user;
                console.log(user);
                setError('')
            })
            .catch(error=>{
                setError(error.message)
            })
        }

     console.log(email,password);
    const createNewUser=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            setError('')
        })
        .catch(error=>{
           setError(error.message)
        });
    }
    if(isLogin){
        processLogin(email,password);
    }

    else{
        createNewUser(email,password);
    }
    };
    return (
    <div className="register">
        <h2 className="mt-5 mb-3">Please {isLogin?"Login": "Register"}</h2>
         <form onSubmit={handleRegister}>
      {!isLogin && <div className="row mb-3 w-50 m-auto">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Full Name</label>
             <div className="col-sm-10">
             <input onBlur={handleNameChange} type="name" className="form-control"  id="inputName"/>
        </div>
    </div>}
        <div className="row mb-3 w-50 m-auto">
         <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
         <div className="col-sm-10">
         <input onBlur={handleEmailChange} type="email" className="form-control"  id="inputEmail3"/>
     </div>
    </div>
        <div className="row mb-3 w-50 m-auto">
         <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
         <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div className="row mb-3 w-50 m-auto">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">Already Registered</label>
      </div>
    </div>
  </div>
  <div className="row mb-3 text-danger fw-bold"><h5>{error}</h5></div>
  <button type="submit" className="btn btn-primary">{isLogin?'Login':'Register'}</button>
  <br />
  <Link to="/login">All Ready Login</Link>
</form>
  
        </div>
    );
};

export default Register;