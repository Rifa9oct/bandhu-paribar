"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdError } from "react-icons/md";
import Swal from "sweetalert2";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const name = data.name;
            const email = data.email;
            const password = data.password;
            const user = { name, email, password };

            const res = await axios.post("/api/auth/register", user);

            if (res.status === 201) {
                router.push("/login");
            }

        } catch (error) {
            if (error.status === 409) {
                Swal.fire({
                    title: `${error.response.data}🙄`,
                    icon: "warning",
                });
            } else {
                console.log(error);
            }
        }
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} action="#" method="post" autoComplete="off">
                <div className="space-y-2">
                    <div>
                        <label htmlFor="name" className="text-[#006837] text-lg font-bold mb-2 block">Full Name</label>
                        <input type="text"
                            {...register("name", { required: true })}
                            name="name"
                            className={`block w-full border-2 px-4 py-3 text-[#006837] text-sm rounded placeholder-[#006837] ${errors.name ? "focus:outline-red-500 border-red-500" : "focus:outline-[#006837] border-[#006837]"}`}
                            placeholder="your name" />
                        {errors.name && <span className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> Name field is required.</span>}
                    </div>
                    <div>
                        <label htmlFor="email" className="text-[#006837] text-lg font-bold mb-2 block">Email</label>
                        <input type="email"
                            {...register("email", { required: true })}
                            name="email"
                            className={`block w-full border-2 px-4 py-3 text-[#006837] text-sm rounded placeholder-[#006837] ${errors.email ? "focus:outline-red-500 border-red-500" : "focus:outline-[#006837] border-[#006837]"}`}
                            placeholder="youremail.@domain.com" />
                        {errors.email && <span className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> Email field is required.</span>}
                    </div>

                    <div>
                        <label htmlFor="password" className="text-[#006837] text-lg font-bold mb-2 block">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"}
                                {...register("password", { required: true })}
                                name="password"
                                className={`block w-full border-2 px-4 py-3 text-[#006837] text-sm rounded placeholder-[#006837] ${errors.password ? "focus:outline-red-500 border-red-500" : "focus:outline-[#006837] border-[#006837]"}`}
                                placeholder="*******" />
                            {errors.password?.type === "required" && <p className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> Password is required.</p>}
                            <span className="absolute top-4 right-4 text-[#006837]" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex items-center">
                        <input type="checkbox" name="aggrement" id="aggrement"
                            className="text-lime-500 focus:ring-0 rounded-sm cursor-pointer" />
                        <label htmlFor="aggrement" className="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a
                            href="#" className="text-[#39b54a]">terms & conditions</a></label>
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit"
                        className="block w-full py-2 text-center text-white bg-[#39b54a] border-2 border-[#39b54a] rounded hover:bg-transparent hover:text-[#39b54a] transition uppercase font-roboto font-medium">Create Account</button>
                </div>
            </form>
        </>
    );
};

export default RegisterForm;