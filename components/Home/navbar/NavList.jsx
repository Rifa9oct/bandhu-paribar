"use client"

import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useEffect, useState } from "react";
import { PiListBold, PiSignOutBold } from "react-icons/pi";
import { RxCrossCircled } from "react-icons/rx";
import Image from "next/image";
import CustomLink from './CustomLink';
import { usePathname } from 'next/navigation';
import Signout from './Signout';
import Link from 'next/link';
import More from './More';

const NavList = ({ user, firstLetter }) => {
    const [show, setShow] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setShow(false);
    }, [pathname]);

    return (
        <>
            <div
                onClick={() => setShow(!show)}
                className='lg:hidden text-3xl'>
                <div className='py-3'><PiListBold /></div>
            </div >

            <div>
                {
                    show && (
                        <div
                            className="flex flex-col transition rounded-md text-base text-black list-none">
                            <Drawer
                                open={show}
                                onClose={() => setShow(!show)}
                                size={300}
                                direction='right'
                                className="flex flex-col py-6 text-base text-black list-none"
                            >
                                <div onClick={() => setShow(false)} className="ml-[250px] w-[30px]">
                                    <RxCrossCircled className='text-[30px] cursor-pointer text-gray-400' />
                                </div>

                                <li className='mb-4'>
                                    {
                                        user ? (
                                            <div className="ml-[23px]">
                                                {
                                                    user?.image ? (
                                                        <div className="relative w-[45px]">
                                                            <Image src={user?.image} width={45} height={45} alt="profile image" className="rounded-full border-2 border-white" />
                                                            <p className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full"></p>
                                                        </div>
                                                    ) : (
                                                        <div className="relative w-[45px]">
                                                            <p className="flex items-center justify-center border-2 border-[#006837] text-[#006837] text-2xl font-bold w-10 h-10 bg-white rounded-full">{firstLetter}</p>
                                                            <p className="absolute bottom-0 lg:right-0 right-[3px] w-3 h-3 bg-green-400 rounded-full "></p>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        ) : ""
                                    }
                                </li>
                                <li className="border-t-2 py-5 pl-6"><CustomLink path="/">Home</CustomLink></li>
                                <li className="border-t-2 py-5 pl-6"><CustomLink path="/about">AboutUs</CustomLink></li>
                                <li className="border-t-2 py-5 pl-6"><More /></li>
                                <li className="border-t-2 py-5 pl-6"><CustomLink path="/contact">ContactUs</CustomLink></li>

                                <li className="border-t-2 py-5 pl-6">
                                    {
                                        user ? (
                                            <div className='flex items-center'>
                                                <PiSignOutBold className="text-lg mr-2" />
                                                <Signout />
                                            </div>

                                        ) : (
                                            <Link href="/login">
                                                <button className="bg-white px-3 py-1 hover:text-[#009345] text-[#006837] font-bold rounded-lg">Sign In</button>
                                            </Link>
                                        )
                                    }
                                </li>
                            </Drawer>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default NavList;