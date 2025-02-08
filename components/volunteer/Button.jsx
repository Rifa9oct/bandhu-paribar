"use client"

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const Button = ({ query }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [item, setItem] = useState("");

    if (item) {
        const params = new URLSearchParams(searchParams);
        if (item) {
            params.set('query', item);
        } else {
            params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`, { scroll: false } );
    }

    return (
        <div className="pb-16 font-bold bg-[#e9f5f0]">
            <div className="flex justify-center">
                <button onClick={() => setItem("bd")}
                    className={`${query === "bd" ? "border-[#39b54a] bg-[#39b54a] text-white" : "border-[#006837] text-[#006837]"} border-[4px] hover:border-[#39b54a] text-xl md:text-3xl px-3 md:px-0 md:w-[550px] py-2 hover:bg-[#39b54a] hover:text-white`}>
                    FOR BANGLADESHI VOLUNTEER
                </button>
            </div>

            <div className="flex justify-center">
                <button onClick={() => setItem("inter")}
                    className={`${query === "inter" ? "border-[#39b54a] bg-[#39b54a] text-white" : "border-[#006837] text-[#006837]"} border-[4px] hover:border-[#39b54a] mt-5 text-xl md:text-3xl px-3 md:px-0 md:w-[550px] py-2 hover:bg-[#39b54a] hover:text-white`}>
                    FOR INTERNATIONAL VOLUNTEER
                </button>
            </div>
        </div>
    );
};

export default Button;