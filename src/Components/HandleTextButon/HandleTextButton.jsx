"use client";

import { MeetContext } from '@/context/MeetContext';
import React, { useContext, useState } from 'react';
import { FaSms } from 'react-icons/fa';
import { toast } from 'react-toastify';

const HandleTextButton = ({ appDetails }) => {

    const { setMeetData } = useContext(MeetContext);

    const [isClicked, setIsClicked] = useState(false); // ✅ button state

    const handleTextButton = () => {

        if (isClicked) return; 

        const textData = {
            type: "text",
            message: "User clicked text button",
            appId: appDetails?.id,
            appName: appDetails?.name,
            id: Date.now()
        };

        setMeetData(prev => [...prev, textData]);

        setIsClicked(true); // 

    toast.success(`text With ${appDetails?.name} ✅`); 
    };

    return (
        <div>
            <button
                onClick={handleTextButton}
                disabled={isClicked} // ✅ disable
                className={`btn flex items-center gap-2 ${
                    isClicked ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                <FaSms /> Text
            </button>
        </div>
    );
};

export default HandleTextButton;