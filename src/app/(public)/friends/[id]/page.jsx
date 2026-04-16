"use client"

import { useParams } from 'next/navigation';
import React from 'react';

const FriendsDetails = () => {
     const {friendId} = useParams()
     console.log(friendId)
    return (
        <div>
            
        </div>
    );
};

export default FriendsDetails;