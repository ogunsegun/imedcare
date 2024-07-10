import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import pic1 from "../src/assets/pic1.jpg";
import Demo from "./Demo";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
    const [RoomCode, setRoomCode] = useState("");
    console.log(RoomCode);
                                                                                                  
    
    //to nav
    const navigate = useNavigate();

    // to make the function of the btn work
    const submitCode = (e) => {
        e.preventDefault();
        navigate('/room/${RoomCode}');  //to take the use to the room code enter
    }
    const Demo =(e) => {
        e.preventDefault();
        navigate('/Demo');
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
                <Navbar />
             {/* <div className="h-[3rem] bg-blue-400">

             </div> */}
    
            {/* Hero */}
            <div className="relative">
                {/* Image & video*/}
                 <div className="absolute h-[35rem] w-full flex overflow-hidden">
                    <img src={pic1} className="object-cover w-full h-full"/>
                </div>
                 
                
                {/* <div className="basis-1/4">02</div> */}
                </div>
                {/* Hero Info */}

           
            <div className="relative z-10 px-6" >
                {/* Main */}
                <div className="pb-8">
                    <h1 className="text-[20px] font-bold text-blue-400 pt-8">
                        Video Chat App With a Doc!</h1>
                    <p className="text-[12px] font-bold text-red-500 px-11">
                        For Emergency code use EM119</p>
                </div>
                {/*  to give the btn a funcv=tion put the action in the form*/}
            <form action="" onSubmit={submitCode} className="">
                 <label htmlFor="" className="text-[20px] px-8 text-blue-400 
                 font-bold">
                Enter The Room Code
            </label> <br />
            <input type="text" required placeholder="Enter Room code"
            value={RoomCode} onChange={(e) => setRoomCode(e.target.value)}
            className="bg-blue-400 placeholder:text-white py-2 w-[16rem]
            rounded-half pl-8 mt-4"
            /><br/>
            <button type="submit" className="bg-blue-400 text-white 
            rounded-[1.5rem] mt-4
            py-1.5 px-4 font-blod drop-shadow-lg"> Go </button>
            
            </form> 
            {/* video */}
            <form action="" onSubmit={Demo} className="">
                 <div >
            <button type="submit" className="bg-blue-400 text-white 
            rounded-[1.5rem] mt-4
            py-.5 px-9 font-blod drop-shadow-lg"> Demo Video </button>
            </div> 
            </form>
            
            </div>

            <div className="text-center bg-blue-400 py-4">
                  < Footer />
                  </div>
        </div>
            
        
    )
}


export default Home