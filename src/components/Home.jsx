import React from 'react';
import NavBar from "../NavBar";
import Footer from '../Footer';
import './Users.css';

function Home() {
  return (
    <div className="Container" >
        <div className="Header">
            <NavBar  />
        </div>
    <div className="home">
      <div className="meeting">
        <h2>Virtual Meeting</h2>
        {/* Add virtual meeting component or content here */}
      </div>
      <div className="online-doctors">
        <h2>Online Doctors</h2>
        {/* Add online doctors component or content here */}
      </div>
      <div className="sidebar">
        <h2>Online Doctors Sidebar</h2>
        {/* Add sidebar content here */}
      </div>
    </div>
    < Footer />
    </div>
  );
}

export default Home;
