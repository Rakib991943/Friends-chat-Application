"use client";

import React from 'react';
import Image from 'next/image';
import logoImage from '../../../public/assets/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiClock1, CiHome } from 'react-icons/ci';
import { FiThermometer } from 'react-icons/fi';

const Navbar = () => {

    const pathname = usePathname(); // ✅ current route

    const activeClass = (path) =>
        pathname === path ? "bg-green-400 font-bold p-1" : "text-black";

    return (
        <nav className='h-[80px] flex bg-gray-200'>
            <div className='w-11/12 mx-auto flex justify-between items-center'>

                <Image
                    src={logoImage}
                    alt="Logo"
                    width={200}
                    height={100}
                />

                <ul className='flex items-center gap-6 w-[400px]'>

                    <li className={`flex items-center gap-1 ${activeClass("/")}`}>
                        <CiHome />
                        <Link href="/">Home</Link>
                    </li>

                    <li className={`flex items-center gap-1 ${activeClass("/friends")}`}>
                        <CiClock1 />
                        <Link href="/friends">Timeline</Link>
                    </li>

                    <li className={`flex items-center gap-1 ${activeClass("/status")}`}>
                        <FiThermometer />
                        <Link href="/status">Status</Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;