"use client";

import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">

            <FaExclamationTriangle className="text-6xl text-yellow-500 mb-4" />

            <h1 className="text-6xl font-bold text-gray-800">404</h1>

            <h2 className="text-2xl font-semibold mt-2 text-gray-700">
                Page Not Found
            </h2>

            <p className="text-gray-500 text-center mt-2 max-w-md">
                Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>

            <Link
                href="/"
                className="mt-6 btn btn-primary flex items-center gap-2"
            >
                <HiHome />
                Go Back Home
            </Link>

        </div>
    );
};

export default NotFound;