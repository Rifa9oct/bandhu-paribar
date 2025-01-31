import More from "./More";
import Image from "next/image";
import CustomLink from "./CustomLink";
import Link from "next/link";
import { auth } from "@/auth";
import Signout from "./Signout";

const Navbar = async () => {
    const session = await auth();
    const user = session?.user;
    const firstLetter = session?.user?.name.slice(0, 1);

    console.log(user);

    return (
        <div className="px-[210px] flex justify-between relative bg-[#006837] text-white">
            <div className="relative">
                <div className="absolute top-0 z-10 flex items-center justify-center w-[130px] h-[120px] rounded-b-[20px] bg-white border-2 border-t-0 border-[#009445]">
                    <Image src="/logo.png" width={100} height={100} alt="logo" />
                </div>
            </div>

            <div className="flex gap-4 items-center font-medium py-5">
                <CustomLink path="/">Home</CustomLink>
                <CustomLink path="/about">AboutUs</CustomLink>
                <div>
                    <More />
                </div>
                <CustomLink path="/contact">ContactUs</CustomLink>
            </div>

            <div className="flex items-center">

                {
                    user ? (
                        <Signout />
                    ) : (
                        <Link href="/login">
                            <button className="bg-white px-3 py-1 hover:text-[#009345] text-[#006837] font-bold rounded-lg">Sign In</button>
                        </Link>
                    )
                }

                {
                    user ? (
                        <div className="ml-[23px]">
                            {
                                user?.image ? (
                                    <div className="relative ">
                                        <Image src={user?.image} width={45} height={45} alt="profile image" className="rounded-full border-2 border-white" />
                                        <p className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full "></p>
                                    </div>
                                ) : (
                                    <div className="relative ">
                                        <p className="flex items-center justify-center text-[#006837] text-2xl font-bold w-10 h-10 bg-white rounded-full">{firstLetter}</p>
                                        <p className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full "></p>
                                    </div>
                                )
                            }
                        </div>
                    ) : ""
                }
            </div>
        </div >
    );
};

export default Navbar;