import MeetProvider from '@/context/MeetContext';
import React from 'react';

const Providers = ({children}) => {
    return (
        
            <MeetProvider>

                {children}
            </MeetProvider>
           
     
    );
};

export default Providers;