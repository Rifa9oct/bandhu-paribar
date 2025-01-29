"use client"

import { customRevalidatePath, login } from "@/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdError } from "react-icons/md";
import Swal from "sweetalert2";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const res = await login(data);

            if (res.status === 200) {
                const res = await customRevalidatePath();
                if (res.status === 200) {
                    router.push("/");
                }

            }
        } catch (err) {
            if (err.message) {
                Swal.fire({
                    title: `${err?.message}😟`,
                    icon: "error",
                });
            } else {
                console.log(err)
            }
        }
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} method="post" autoComplete="off">
                <div className="space-y-2">
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

                <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                        <input type="checkbox" name="remember" id="remember"
                            className="text-[#39b54a] focus:ring-0 rounded-sm cursor-pointer" />
                        <label htmlFor="remember" className="text-gray-600 ml-3 cursor-pointer">Remember Me</label>
                    </div>
                    <Link href="#" className="text-[#39b54a]">Forgot Password</Link>
                </div>

                <div className="mt-4">
                    <button type="submit"
                        className="block w-full py-2 text-center text-white bg-[#39b54a] border-2 border-[#39b54a] rounded hover:bg-transparent hover:text-[#39b54a] transition uppercase font-roboto font-medium">Login</button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
