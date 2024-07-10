import React, { useState } from 'react';
import logo from '../bg.png';
import { Link } from 'react-router-dom';
import Login_p from './Login_p';
import NavBar from '../NavBar';
import '../App.css'; // You can define your CSS styles in this file

function Signup() {
  //state to hold the selected option
  const [selectedOption, setSelectedOption]  = useState('')
  const [selectedOptions, setSelectedOptions]  = useState('')
  // function to handle change in the selected option
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }
  const handleChanges = (event) => {
    setSelectedOptions(event.target.value);
  }
  return (
    <div className="container">
      {/* <NavBar showNavbar={false} /> */}
      <div className="image">
        <img src={logo} alt="bg" />
      </div>
      
      <div className="forms">
        <h6 className='login-user1'>Are you a Doctors? <Link to='/'>Login_d</Link></h6>
        <h6 className='login-user2'>Are you a Patient? <Link to='/Login_p'>Login_p</Link> </h6>
  
        <h2>Get Started</h2>
        <form id="signup-form">
          <input type='text' placeholder='First Name' required />
          <input type='text' placeholder='Last Name' required />
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder='example@email.com' />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder='Comfi Password' required /> 
          {/*<label htmlFor='dropdown'>Choose who you are:</label> 
          <select id="dropdown" value={selectedOption} onChange={handleChange} >
            <option value="">Select an option</option>
            <option value="Doctor">Doctor</option>
            <option valuse="Patient">Patient</option>
          </select>
          <label htmlFor='dropdown'>Gender:</label> 
          <select id="dropdown" value={selectedOptions} onChange={handleChanges} >
            <option value="">Select an option</option>
            <option value="Female">Female</option>
            <option valuse="Male">Male</option>
          </select>*/}
          <button type="submit">Sign Up</button>
         </form>
        <form id="login-form">
          <h1> OR </h1>
          
        </form>
      </div>
    </div>
  );
}

export default Signup;
