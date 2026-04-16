import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ friend }) => {

  const { id, name, picture, days_since_contact, tags, status } = friend;

  return (
    
    <Link href={`/friends/${id}`}>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center relative w-[250px] hover:shadow-md transition-shadow cursor-pointer">
        
        {/* Profile Image */}
        <div className="relative w-24 h-24 mb-4">
          <Image
            src={picture}
            alt={name}
            fill
            
            className="rounded-full object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="text-xl font-bold text-slate-800 mb-1">{name}</h2>

        {/* Days Ago */}
        <p className="text-gray-400 text-sm mb-3">{days_since_contact}d ago</p>

        {/* Tag */}
        <div className="mb-4">
          <span className="bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            {tags[0]}
          </span>
        </div>

        {/* Status Button */}
        <div className={`px-6 py-2 rounded-full text-white font-bold text-sm shadow-sm
          ${status === 'overdue' ? 'bg-red-500' : 
            status === 'almost due' ? 'bg-amber-500' : 'bg-emerald-500'}
        `}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>

        {/* Notification Dot */}
        <div className="absolute top-1/2 right-6 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
      </div>
    </Link>
  );
};

export default Card;