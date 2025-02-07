"use client"

import { signOut } from "next-auth/react";

const Signout = () => {
    return (
        <button
            onClick={() => {
                signOut({ callbackUrl: "/login" })
            }}
            className="bg-white lg:px-3 lg:py-1 hover:text-[#009345] lg:text-[#006837] font-bold rounded-lg">Sign Out</button>
    );
};

export default Signout;