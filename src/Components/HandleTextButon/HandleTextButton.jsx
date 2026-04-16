"use client"
import { MeetContext } from '@/context/MeetContext';
import React, { useContext, useState } from 'react';
import { FaSms } from 'react-icons/fa';


const HandleTextButton = ({appDetails}) => {

    const {meetData, setMeetData} = useContext(MeetContext)

    const handleTextButton =()=>{

    setMeetData([...meetData, appDetails])

   }

    return (
        <div>
            <button
            onClick={handleTextButton}
            className="btn flex items-center gap-2">
                            <FaSms /> Text
                          </button>
        </div>
    );
};

export default HandleTextButton;