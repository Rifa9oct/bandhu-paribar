"use client"

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

const SocialLogin = () => {

    return (
        <div className="mt-4 flex gap-4">
            <div className="flex items-center justify-center gap-1 border-2 border-[#006837] w-1/2 rounded">
                <p className="text-2xl text-blue-600"><FaFacebook /></p>
                <button
                    className="hover:text-[#39b54a] py-2 text-center text-[#006837] rounded font-roboto font-bold">
                    Facebook
                </button>
            </div>

            <div className="flex items-center justify-center gap-1 border-2 border-[#006837] w-1/2 rounded">
                <p className="text-2xl"><FcGoogle /></p>
                <button
                    className="hover:text-[#39b54a] py-2 text-center text-[#006837] rounded font-roboto font-bold">
                    Google
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;