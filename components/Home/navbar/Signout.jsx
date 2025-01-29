"use client"

import { signOut } from "next-auth/react";

const Signout = () => {
    return (
        <button
            onClick={() => {
                signOut({ callbackUrl: "/login" })
            }}
            className="bg-white px-3 py-1 hover:text-[#009345] text-[#006837] font-bold rounded-lg">Sign Out</button>
    );
};

export default Signout;