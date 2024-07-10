import React from "react";
import logo from '../bg.png';
import '../App.css';
import Signup from "./Signup";
import { Link } from 'react-router-dom';

function Login_p() {

    return (
    <div className="container">
      <div className="image">
        <img src={logo} alt="bg" />
      </div>
      
      <div className="forms">
      <h6 className='login-user1'>Are you a Doctors? <Link to='/'>Login_d</Link></h6>
        <h2>WELCOME</h2>
        <form id="signup-form">
          <input type="email" placeholder='example@email.com' />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
         </form>
         <form id="login-form">
          <h1> OR </h1>
           <p>GOOGLE ACCOUNT</p>
        </form>
        <h6 className='login-user3'>You don't have account? <Link to='/Signup'>Sign up</Link></h6>
         </div>
    </div>
    );
};

export default Login_p;