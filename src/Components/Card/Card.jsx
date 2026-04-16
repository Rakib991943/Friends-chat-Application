import Image from 'next/image';
import React from 'react';

const Card = ({friend}) => {
    console.log(friend)
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 bg-gray-100">
     
        <div 
          key={friend.id} 
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center relative w-[250px]"
        >
          {/* প্রোফাইল ইমেজ */}
          <div className="relative w-24 h-24 mb-4">
            <Image
              src={friend.picture}
              alt={friend.name}
              fill
              className="rounded-full object-cover"
            />
          </div>

          {/* নাম */}
          <h2 className="text-xl font-bold text-slate-800 mb-1">{friend.name}</h2>

          {/* কতদিন আগে কন্টাক্ট হয়েছে */}
          <p className="text-gray-400 text-sm mb-3">{friend.days_since_contact}d ago</p>

          {/* ট্যাগ (প্রথম ট্যাগটি দেখাচ্ছি আপনার ইমেজের মতো) */}
          <div className="mb-4">
            <span className="bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              {friend.tags[0]}
            </span>
          </div>

          {/* স্ট্যাটাস বাটন */}
          <div className={`px-6 py-2 rounded-full text-white font-bold text-sm shadow-sm
            ${friend.status === 'overdue' ? 'bg-red-500' : 
              friend.status === 'almost due' ? 'bg-amber-500' : 'bg-emerald-500'}
          `}>
            {friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}
          </div>

          {/* লাল ডট (ইমেজে যেমন ছিল) */}
          <div className="absolute top-1/2 right-6 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
     
    </div>
        </div>
    );
};

export default Card;