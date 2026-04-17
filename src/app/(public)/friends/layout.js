import Navbar from '@/Components/Navbar/Navbar';
import React, { Children } from 'react';

const layout = ({children}) => {
    return (
        <div>
           
            {children}
        </div>
    );
};

export default layout;