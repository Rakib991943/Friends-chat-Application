"use client"

import React from 'react';
import { FaVideo } from 'react-icons/fa6';

const HanldleVideoCallButton = () => {
    return (
        <div>
             <button className="btn flex items-center gap-2">
                            <FaVideo /> Video
                          </button>
        </div>
    );
};

export default HanldleVideoCallButton;