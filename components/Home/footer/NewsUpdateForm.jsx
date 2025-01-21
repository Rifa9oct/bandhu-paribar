"use client"

import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { MdError } from "react-icons/md";
import Link from "next/link";

const NewsUpdateForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log(data);
        } catch (err) {
              console.log(err);
        }
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text"
                        name="name"
                        {...register("name", { required: true })}
                        className={`w-[300px] md:w-[350px] lg:w-[400px] 
                        text-[#006837] placeholder-[#006837] mt-2 px-3 py-1 ${errors.name ? "focus:outline-4 focus:outline-red-500" : "focus:outline-4 focus:outline-[#3ab54a]"} `}
                        placeholder="Your name" /> <br />
                    {errors.name && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> Name field is required.</span>}
                </div>

                <div>
                    <input type="email"
                        name="email"
                        {...register("email", { required: true })}
                        className={`w-[300px] md:w-[350px] lg:w-[400px] 
                        text-[#006837] placeholder-[#006837] mt-2 px-3 py-1 ${errors.email ? "focus:outline-4 focus:outline-red-500" : "focus:outline-4 focus:outline-[#3ab54a]"} `}
                        placeholder="Your mail" /> <br />
                    {errors.email && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> Email field is required.</span>}
                </div>

                <button type='submit'
                    className="bg-[#3bb44a] font-bold text-lg text-white w-full py-2 mt-2">
                    S U B S C R I B E
                </button>
            </form>

            <div className="flex gap-8 items-center justify-center text-4xl mt-5">
                <Link href="#" className="text-[#3bb44a] hover:text-green-500">
                    <FaFacebookF />
                </Link>
                <Link href="#" className="text-[#3bb44a] hover:text-green-500">
                    <BsInstagram />
                </Link>
                <Link href="#" className="text-[#3bb44a] hover:text-green-500">
                    <FaTwitter />
                </Link>
                <Link href="#" className="text-[#3bb44a] hover:text-green-500">
                    <FaLinkedinIn />
                </Link>
                <Link href="#" className="text-[#3bb44a] hover:text-green-500">
                    <FaYoutube />
                </Link>
            </div>
        </div>
    );
};

export default NewsUpdateForm;