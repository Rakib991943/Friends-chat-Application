"use client";

import { MeetContext } from '@/context/MeetContext';
import React, { useContext, useState } from 'react';
import { FaSms } from 'react-icons/fa';
import { toast } from 'react-toastify';

const HandleTextButton = ({ appDetails }) => {

    const { setMeetData } = useContext(MeetContext);

    const [isClicked, setIsClicked] = useState(false); // ✅ button state

    const handleCallButton = () => {

        if (isClicked) return; // safety

        const textData = {
            type: "call",
            message: "User clicked text button",
            appId: appDetails?.id,
            appName: appDetails?.name,
            id: Date.now()
        };

        setMeetData(prev => [...prev, textData]);

        setIsClicked(true); // ✅ disable button

        toast.success(`Call With ${appDetails?.name} ✅`); 
    };

    return (
        <div>
            <button
                onClick={handleCallButton}
                disabled={isClicked} 
                className={`btn flex items-center gap-2 ${
                    isClicked ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                <FaSms /> Call
            </button>
        </div>
    );
};

export default HandleTextButton;