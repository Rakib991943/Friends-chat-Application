
"use client "
import React from 'react';
import { FaPhone } from 'react-icons/fa6';

const HandleCallButton = () => {
    return (
        <div>
             <button className="btn flex items-center gap-2">
                            <FaPhone /> Call 
                          </button>
        </div>
    );
};

export default HandleCallButton;