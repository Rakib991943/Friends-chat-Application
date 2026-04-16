
import HandleCallButton from '@/Components/HandleCallButton/HandleCallButton';
import HandleTextButton from '@/Components/HandleTextButon/HandleTextButton';
import HanldleVideoCallButton from '@/Components/HandleVideoCallButton/HnaldleVideoCallButton';
import Image from 'next/image';
import React, { useContext } from 'react';

import {
  FaPhoneAlt,
  FaSms,
  FaVideo,
  FaBell,
  FaArchive,
} from "react-icons/fa";
import { MdDelete } from 'react-icons/md';

const FriendsDetails = async ({ params }) => {


    const res = await fetch('http://localhost:3000/friends.json')


    const friends = await res.json();
    const { id } = await params;



    
    const appDetails = friends.find(friend=> String(friend.id) === id);


     const {
    name,
    picture,
    bio,
    days_since_contact,
    goal,
    next_due_date,
    status,
    tags,
    
  } = appDetails;
    

    return (
       <>
      <div className="bg-base-200 p-6 rounded-xl h-[400px]">
      <div className="grid md:grid-cols-4 gap-4">

        {/* LEFT PROFILE */}
        <div className="bg-base-100 rounded-xl shadow-md p-4 text-center">
          <Image
            src={picture}
            alt={name}
            width={200}
            height={200}
            className="w-16 h-16 rounded-full mx-auto"
          />

          <h2 className="font-semibold mt-2">{name}</h2>

          <div className="flex justify-center gap-2 mt-1">
            <span className="badge badge-error badge-sm">
              {status}
            </span>
            {tags.map((tag, i) => (
              <span key={i} className="badge badge-outline badge-sm">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-2">{bio}</p>

          {/* Buttons */}
          <div className="mt-3 space-y-2">
            <button className="btn btn-xs w-full flex items-center gap-2">
              <FaBell /> Snooze 2 Weeks
            </button>
            <button className="btn btn-xs w-full flex items-center gap-2">
              <FaArchive /> Archive
            </button>
            <button className="btn btn-xs btn-error w-full flex items-center gap-2">
              <MdDelete /> Delete
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:col-span-3 space-y-4">

          {/* TOP STATS */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-base-100 rounded-xl shadow-md p-4 text-center">
              <h2 className="text-xl font-bold">
                {days_since_contact}
              </h2>
              <p className="text-sm text-gray-500">
                Days Since Contact
              </p>
            </div>

            <div className="bg-base-100 rounded-xl shadow-md p-4 text-center">
              <h2 className="text-xl font-bold">{goal}</h2>
              <p className="text-sm text-gray-500">
                Goal (Days)
              </p>
            </div>

            <div className="bg-base-100 rounded-xl shadow-md p-4 text-center">
              <h2 className="text-sm font-semibold">
                {next_due_date}
              </h2>
              <p className="text-sm text-gray-500">
                Next Due
              </p>
            </div>
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-base-100 rounded-xl shadow-md p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Relationship Goal</h3>
              <p className="text-sm text-gray-500">
                Connect every <span className="font-bold">{goal} days</span>
              </p>
            </div>
            <button className="btn btn-xs">Edit</button>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-base-100 rounded-xl shadow-md p-4">
            <h3 className="font-semibold mb-3">Quick Check-In</h3>

            <div className="grid justify-betweenti grid-cols-3 gap-3">
            <HandleCallButton  ></HandleCallButton>

              <HandleTextButton appDetails={appDetails}></HandleTextButton>

              <HanldleVideoCallButton></HanldleVideoCallButton>
            </div>
          </div>

        </div>
      </div>
    </div>
       </>
    );
};

export default FriendsDetails;