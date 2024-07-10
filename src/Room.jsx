import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";


const Room = () => {
    const {roomID} = useParams();

   
    const meeting = async (element) => {
        const appID = 1218077696;
        const serverSecret = "d34b614c4414e7a7a9a4c9e68fe9327e";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().
        toString(), "Dr Johnpaul");

         // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        //start the call
     zp.joinRoom({
        container:element,
        scenario:{
            mode:ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].

        },
     });

    };
    

    return (
        <div ref={meeting} style={{width:"100vw", height:"100vh"}}></div>
    )
};




export default Room;