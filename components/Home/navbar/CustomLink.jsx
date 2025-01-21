"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, children }) => {
    const pathname = usePathname();
    
    let active;
    if (path !== "more") {
        active = pathname === path;
    }

    return (
        <>
            {
                path === "more" ? (
                    <Link className={`${active ? "text-[#fffa00] font-bold" : ""} `} href="/">{children}</Link>
                ) : (
                    <Link className={`${active ? "text-[#fffa00] font-bold" : ""} `} href={path}>{children}</Link >
                )
            }
        </>

    );
};

export default CustomLink;