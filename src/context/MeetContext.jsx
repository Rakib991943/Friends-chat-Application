"use client"

import React, { createContext, useState } from "react";


export const MeetContext = createContext();


const MeetProvider = ({ children }) => {
  const [meetData, setMeetData] = useState([]);

  const data = {
    meetData,
    setMeetData,
  };

  return (
    <MeetContext.Provider value={data}>
      {children}
    </MeetContext.Provider>
  );
};

export default MeetProvider;