import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoCall, IoMail } from "react-icons/io5";

const Header = () => {
    return (
        <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center bg-[#c2272d] py-3 text-white px-8 lg:px-[210px]">
            <div className="flex gap-6 items-center">
                <div className="flex gap-1 items-center">
                    <IoCall />
                    <p>+8801771647438</p>
                </div>
                <div className="flex gap-1 items-center">
                    <IoMail />
                    <p>info@bondhuporibar.org</p>
                </div>
            </div>

            <div className="flex gap-4 items-center">
                <Link href="#" className="hover:text-[#006837]">
                    <FaFacebookF />
                </Link>
                <Link href="#" className="hover:text-[#006837]">
                    <BsInstagram />
                </Link>
                <Link href="#" className="hover:text-[#006837]">
                    <FaTwitter />
                </Link>
                <Link href="#" className="hover:text-[#006837]">
                    <FaLinkedinIn />
                </Link>
                <Link href="#" className="hover:text-[#006837]">
                    <FaYoutube />
                </Link>
            </div>
        </div>
    );
};

export default Header;