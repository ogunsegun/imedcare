import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Room from "./Room";
import Demo from "./Demo";
import Booking from "./components/Booking";

function App() {
  return (
    <div>
      <Routes >
         <Route path="/" element={<Home />} />
         <Route path="/Room/:roomID" element={<Room />} />
         <Route path="/Demo" element={<Demo />}  />
         <Route path="/Booking" Component={Booking} /> 
      </Routes>
    </div>
  );
}

export default App;


// https://ogunsegun.github.io/imedcare/