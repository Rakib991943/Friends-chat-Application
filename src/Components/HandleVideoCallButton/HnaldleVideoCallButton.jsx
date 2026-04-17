"use client"

import { MeetContext } from '@/context/MeetContext';
import React, { useContext } from 'react';
import { FaVideo } from 'react-icons/fa6';

const HanldleVideoCallButton = ({appDetails}) => {


     const {meetData, setMeetData} = useContext(MeetContext);
    
    
         const textData = {
        type: "video",
        message: "User clicked Call  button",
        appId: appDetails?.id,
        appName: appDetails?.name
      };
    
        const handleVideoCallButton =()=>{
    
        setMeetData([...meetData, textData])
    
       }
    return (
        <div>
             <button  
             onClick={handleVideoCallButton}
             className="btn flex items-center gap-2">
                            <FaVideo /> Video
                          </button>
        </div>
    );
};

export default HanldleVideoCallButton;