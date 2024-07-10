import React from "react";
import Healthcare from "../src/assets/Healthcare.mp4"
import Footer from "./Footer";
import Navbar from "./Navbar";


const Demo = () => {

    return (
        <div className="flex flex-col min-h-screen" >
            {/* Navbar */}

            <Navbar />

               <div className="h-[37rem]  w-full flex overflow-hidden ">
                 <video  
                src={Healthcare} controls autoPlay muted></video>
                 </div> 

                 {/* Footer */}
                  < Footer />
            
        </div>
        
    )
}

export default Demo