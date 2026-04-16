
import React from 'react';
import Image from 'next/image';
import logoImage from '../../../public/assets/logo.png';
import Link from 'next/link';
import { CiClock1, CiHome } from 'react-icons/ci';
import { FiThermometer } from 'react-icons/fi';

const Navbar = () => {
    return (
        <nav className='h-[80px] flex  bg-gray-200 '>
            <div className='w-11/12  mx-auto flex justify-between items-center'>
                <Image
                    src={logoImage}
                    alt="Logo"

                    width={200}
                    height={100}

                />

                <ul className='flex items-center gap-4 w-[400px]'>
                    <CiHome /><li><Link href={"/"}>Home  </Link></li>

                    <CiClock1 /><li><Link href={"/friends"}>  Timeline</Link></li>
                    <FiThermometer /><li><Link href={"/status"}> Status</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;