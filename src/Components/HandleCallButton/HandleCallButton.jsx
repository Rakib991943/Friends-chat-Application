
"use client"

import { MeetContext } from '@/context/MeetContext';
import { useContext } from 'react';
import { FaPhone } from 'react-icons/fa6';

const HandleCallButton = ({appDetails}) => {
    
    const {meetData, setMeetData} = useContext(MeetContext);


     const textData = {
    type: "call",
    message: "User clicked Call  button",
    appId: appDetails?.id,
    appName: appDetails?.name
  };

    const handleCallButton =()=>{

    setMeetData([...meetData, textData])

   }

    return (
        <div>
             <button
             onClick={handleCallButton}
             className="btn flex items-center gap-2">
                            <FaPhone /> Call 
                          </button>
        </div>
    );
};

export default HandleCallButton;