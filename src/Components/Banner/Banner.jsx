"use client";

import { MeetContext } from '@/context/MeetContext';
import React, { useContext, useEffect, useState } from 'react';

const Banner = () => {

    const [friends, setFriends] = useState([]);
    const { meetData } = useContext(MeetContext);

    useEffect(() => {
        fetch('/friends.json') 
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);

    return (
        <div className='space-y-3 w-11/12 mx-auto mb-10'>
            <h1 className='text-4xl font-bold text-center text-black mt-7'>
                Friends to Keep Close in Your Lifes
            </h1>

            <p className='text-center'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.
            </p>

            <button className='btn btn-success block mx-auto'>
                + Add Friend
            </button>

            <section className='grid md:grid-cols-4  gap-4 mt-8'>
                <div className='shadow-2xl p-6 w-[310px] flex flex-col items-center justify-center h-[150px]'>
                    <h2 className='text-xl font-bold'>{friends.length}</h2>
                    <h1>Total Friends</h1>
                </div>

                <div className='shadow-2xl w-[310px] flex flex-col items-center justify-center h-[150px] p-6'>
                    <h2 className='text-xl font-bold'>{meetData.length}</h2>
                    <h1>Total Activities</h1>
                </div>

                <div className='shadow-2xl w-[310px] flex flex-col items-center justify-center h-[150px] p-6'>
                    <h2 className='text-xl font-bold'>6</h2>
                    <h1>Need Attention</h1>
                </div>

                <div className='shadow-2xl w-[310px] flex flex-col items-center justify-center h-[150px] p-6'>
                    <h2 className='text-xl font-bold'>12</h2>
                    <h1>Interaction This Month</h1>
                </div>
            </section>
        </div>
    );
};

export default Banner;