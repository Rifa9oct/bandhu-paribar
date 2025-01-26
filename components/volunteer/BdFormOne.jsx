"use client"

import { MdError } from "react-icons/md";
import { useForm } from "react-hook-form";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import BdFormTwo from "./BdFormTwo";
import { useState } from "react";

const BdFormOne = ({ page }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [userData, setUserData] = useState({});

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const onSubmit = async (data) => {
        console.log("data", data);

        setUserData({ ...userData, ...data });

        const params = new URLSearchParams(searchParams);
        const nextPage = 2;

        if (data) {
            params.set("page", nextPage);
        } else {
            params.delete("page");
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false });

        reset();
    };

    console.log("userData", userData);

    return (
        <div>
            {
                parseInt(page) === 2 ? (
                    <BdFormTwo
                        userData={userData}
                        setUserData={setUserData}
                    />
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Full Name */}
                        <div className="mb-5 ">
                            <label className="flex justify-center  underline underline-offset-4 text-3xl font-bold text-[#006837]">Full Name <span className="text-red-500 font-bold">*</span></label>
                            <input
                                type="text" name="name"
                                {...register("name", { required: "Name field is required." })}
                                className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 placeholder-[#39b54a] ${errors.name ? "focus:outline-red-500 border-red-500" : "focus:outline-[#006837] border-[#006837]"} mt-8`}
                                placeholder="Name in English"
                            />
                            {errors.name && (
                                <span className="text-sm text-red-500 flex items-center mt-1">
                                    <MdError className="text-lg mr-1" />
                                    {errors.name.message}
                                </span>
                            )}
                        </div>

                        {/* Date of Birth and blood goup */}
                        <div className="flex w-full gap-6 items-center mb-5">
                            <div className="w-1/2">
                                <label className="text-[#006837] font-bold text-xl">Date of Birth <span className="text-red-500 font-bold">*</span></label>
                                <div className="flex gap-4 mt-2">
                                    <select
                                        name="day"
                                        {...register("day", { required: "Day field is required." })}
                                        className={`bg-transparent border-2 w-1/3 text-[#39b54a] rounded px-3 py-2 ${errors.day ? "focus:outline-red-500 border-red-500" : "focus:outline-[#006837] border-[#006837]"}`}>

                                        <option value="">Day</option>
                                        {[...Array(31).keys()].map((i) => (
                                            <option key={i + 1} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>

                                    <select
                                        name="month"
                                        {...register("month", { required: "Month is required" })}
                                        className={`bg-transparent border-2 w-1/3 text-[#39b54a] rounded px-3 py-2 ${errors.month ? "focus:outline-red-500 border-red-500" : "focus:outline-[#006837] border-[#006837]"}`}>
                                        <option value="">Month</option>
                                        {[
                                            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
                                        ].map((month, i) => (
                                            <option key={i + 1} value={i + 1}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>

                                    <select
                                        name="year"
                                        {...register("year", { required: "Year is required" })}
                                        className={`bg-transparent border-2 w-1/3 text-[#39b54a] rounded px-3 py-2 ${errors.year ? "focus:outline-red-500 border-red-500" : "focus:outline-[#006837] border-[#006837]"}`}>
                                        <option value="">Year</option>
                                        {Array.from({ length: 100 }, (_, i) => 2025 - i).map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {errors.day || errors.month || errors.year ? (
                                    <span className="text-sm text-red-500 flex items-center mt-1">
                                        <MdError className="text-lg mr-1" />
                                        Please select a valid date.
                                    </span>
                                ) : null}
                            </div>

                            <div className="w-1/2">
                                <label className="text-[#006837] font-bold text-xl">Blood Group <span className="text-red-500 font-bold">*</span></label>
                                <select name="bloodGroup"
                                    {...register("bloodGroup", { required: "Blood Group field is required." })}
                                    className={`bg-transparent border-2 w-full text-[#39b54a] rounded px-3 py-2 ${errors.bloodGroup ? "focus:outline-red-500 border-red-500" : "focus:outline-[#006837] border-[#006837]"} mt-2`}>

                                    <option value="">Choose Your Blood Group</option>
                                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                                        <option key={group} value={group}>
                                            {group}
                                        </option>
                                    ))}
                                </select>
                                {errors.bloodGroup && (
                                    <span className="text-sm text-red-500 flex items-center mt-1">
                                        <MdError className="text-lg mr-1" />
                                        {errors.bloodGroup.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Religion and Gender */}
                        <div className="flex gap-6 mb-5">
                            <div className="w-1/2 flex gap-4">
                                <div className="w-1/2">
                                    <label className="text-[#006837] font-bold text-xl">Religion (If Want)</label>
                                    <input
                                        type="text"
                                        name="religion"
                                        {...register("religion")}
                                        className="w-full mt-2 bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 placeholder-[#39b54a] focus:outline-[#006837] border-[#006837]"
                                        placeholder="Your Religion"
                                    />
                                </div>

                                <div className="w-1/2">
                                    <label className="text-[#006837] font-bold text-xl">Gender <span className="text-red-500 font-bold">*</span></label>
                                    <select
                                        name="gender"
                                        {...register("gender", { required: "Gender field is required." })}
                                        className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 ${errors.gender ? "border-red-500 focus:outline-red-500" : "border-[#006837] focus:outline-[#006837]"
                                            } mt-2`}
                                    >
                                        <option value="">Select Gender</option>
                                        {["Male", "Female", "Other"].map((gender) => (
                                            <option key={gender} value={gender}>
                                                {gender}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.gender && (
                                        <span className="text-sm text-red-500 flex items-center mt-1">
                                            <MdError className="text-lg mr-1" />
                                            {errors.gender.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="w-1/2">
                                <label className="text-[#006837] font-bold text-xl">Skill <span className="text-red-500 font-bold">*</span></label>
                                <select name="skill"
                                    {...register("skill", { required: "Skill field is required." })}
                                    className={`bg-transparent border-2 w-full text-[#39b54a] rounded px-3 py-2 ${errors.skill ? "focus:outline-red-500 border-red-500" : "focus:outline-[#006837] border-[#006837]"} mt-2`}>

                                    <option value="">Choose Your skill</option>
                                    {["Html", "CSS", "Javascript", "React", "Next Js"].map((group) => (
                                        <option key={group} value={group}>
                                            {group}
                                        </option>
                                    ))}
                                </select>
                                {errors.skill && (
                                    <span className="text-sm text-red-500 flex items-center mt-1">
                                        <MdError className="text-lg mr-1" />
                                        {errors.skill.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Profession and Current Institute/Workplace */}
                        <div className="flex gap-6 mb-5">
                            <div className="w-1/2">
                                <label className="text-[#006837] font-bold text-xl">Profession <span className="text-red-500 font-bold">*</span></label>
                                <input
                                    type="text"
                                    name="profession"
                                    {...register("profession", { required: "Profession field is required." })}
                                    className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 placeholder-[#39b54a] ${errors.profession ? "border-red-500 focus:outline-red-500" : "border-[#006837] focus:outline-[#006837]"
                                        } mt-2`}
                                    placeholder="Your Profession"
                                />
                                {errors.profession && (
                                    <span className="text-sm text-red-500 flex items-center mt-1">
                                        <MdError className="text-lg mr-1" />
                                        {errors.profession.message}
                                    </span>
                                )}
                            </div>

                            <div className="w-1/2">
                                <label className="text-[#006837] font-bold text-xl">Current Institute/Workplace (If Any)</label>
                                <input
                                    type="text"
                                    name="institute"
                                    {...register("institute")}
                                    className="w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 placeholder-[#39b54a] focus:outline-[#006837] border-[#006837] mt-2"
                                    placeholder="Your Current Institute/Workplace"
                                />
                            </div>
                        </div>

                        {/* Educational Qualification and T-shirt Size */}
                        <div className="flex gap-6 mb-5">
                            <div className="w-1/2">
                                <label className="text-[#006837] font-bold text-xl">Educational Qualification <span className="text-red-500 font-bold">*</span></label>
                                <input
                                    type="text"
                                    name="education"
                                    {...register("education", { required: "Educational qualification is required." })}
                                    className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 mt-2 placeholder-[#39b54a] ${errors.education ? "border-red-500 focus:outline-red-500" : "border-[#006837] focus:outline-[#006837]"
                                        }`}
                                    placeholder="Your Educational Qualification"
                                />
                                {errors.education && (
                                    <span className="text-sm text-red-500 flex items-center mt-1">
                                        <MdError className="text-lg mr-1" />
                                        {errors.education.message}
                                    </span>
                                )}
                            </div>

                            <div className="w-1/2">
                                <label className="text-[#006837] font-bold text-xl">T-shirt Size <span className="text-red-500 font-bold">*</span></label>
                                <select
                                    name="tshirtSize"
                                    {...register("tshirtSize", { required: "T-shirt size is required." })}
                                    className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 mt-2 ${errors.tshirtSize ? "border-red-500 focus:outline-red-500" : "border-[#006837] focus:outline-[#006837]"
                                        }`}
                                >
                                    <option value="">Choose Your T-shirt Size</option>
                                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                                        <option key={size} value={size}>
                                            {size}
                                        </option>
                                    ))}
                                </select>
                                {errors.tshirtSize && (
                                    <span className="text-sm text-red-500 flex items-center mt-1">
                                        <MdError className="text-lg mr-1" />
                                        {errors.tshirtSize.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Phone Number and Email Address */}
                        <div className="flex gap-6 mb-5">
                            <div className="w-1/2">
                                <label className="text-[#006837] font-bold text-xl">Phone Number <span className="text-red-500 font-bold">*</span></label>
                                <input
                                    type="tel"
                                    name="phone"
                                    {...register("phone", { required: "Phone number is required." })}
                                    className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 mt-2 placeholder-[#39b54a] ${errors.phone ? "border-red-500 focus:outline-red-500" : "border-[#006837] focus:outline-[#006837]"
                                        }`}
                                    placeholder="We will contact you through this phone number"
                                />
                                {errors.phone && (
                                    <span className="text-sm text-red-500 flex items-center mt-1">
                                        <MdError className="text-lg mr-1" />
                                        {errors.phone.message}
                                    </span>
                                )}
                            </div>
                            <div className="w-1/2">
                                <label className="text-[#006837] font-bold text-xl">E-mail Adress <span className="text-red-500 font-bold">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    {...register("email", { required: "Email address is required." })}
                                    className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 mt-2 placeholder-[#39b54a] ${errors.email ? "border-red-500 focus:outline-red-500" : "border-[#006837] focus:outline-[#006837]"
                                        }`}
                                    placeholder="We will contact you through this email address"
                                />
                                {errors.email && (
                                    <span className="text-sm text-red-500 flex items-center mt-1">
                                        <MdError className="text-lg mr-1" />
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* present adress  */}
                        <div className="my-10 ">
                            <label className="flex justify-center  underline underline-offset-4 text-3xl font-bold text-[#006837]">Present Adress <span className="text-red-500 font-bold">*</span></label>

                            <div className="flex gap-6 mt-8">
                                <div className="w-1/2 flex gap-4">
                                    <div className="w-1/2">
                                        <label className="text-[#006837] font-bold text-xl">Division <span className="text-red-500 font-bold">*</span></label>
                                        <select
                                            name="presentDivision"
                                            {...register("presentDivision", { required: "Present Division field is required." })}
                                            className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 ${errors.presentDivision ? "border-red-500 focus:outline-red-500" : "border-[#006837] focus:outline-[#006837]"
                                                } mt-2`}
                                        >
                                            <option value="">Select division</option>
                                            {["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"].map((division) => (
                                                <option key={division} value={division}>
                                                    {division}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.presentDivision && (
                                            <span className="text-sm text-red-500 flex items-center mt-1">
                                                <MdError className="text-lg mr-1" />
                                                {errors.presentDivision.message}
                                            </span>
                                        )}
                                    </div>

                                    <div className="w-1/2">
                                        <label className="text-[#006837] font-bold text-xl">District <span className="text-red-500 font-bold">*</span></label>
                                        <input
                                            type="text"
                                            name="presentDistrict"
                                            {...register("presentDistrict", { required: "Present District field is required." })}
                                            className={`w-full bg-transparent border-2 text-[#39b54a] placeholder:text-[#39b54a] rounded px-3 py-2 ${errors.gender ? "border-red-500 focus:outline-red-500" : "border-[#006837] focus:outline-[#006837]"
                                                } mt-2`}
                                            placeholder="Your distict"
                                        />
                                        {errors.presentDistrict && (
                                            <span className="text-sm text-red-500 flex items-center mt-1">
                                                <MdError className="text-lg mr-1" />
                                                {errors.presentDistrict.message}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="w-1/2 flex gap-4">
                                    <div className="w-1/2">
                                        <label className="text-[#006837] font-bold text-xl">Upazila <span className="text-red-500 font-bold">*</span></label>
                                        <input
                                            type="text"
                                            name="presentUpazila"
                                            {...register("presentUpazila", { required: "Present Upazila field is required." })}
                                            className={`w-full bg-transparent border-2 text-[#39b54a] placeholder:text-[#39b54a] rounded px-3 py-2 ${errors.gender ? "border-red-500 focus:outline-red-500" : "border-[#006837] focus:outline-[#006837]"
                                                } mt-2`}
                                            placeholder="Your upazila"
                                        />
                                        {errors.presentUpazila && (
                                            <span className="text-sm text-red-500 flex items-center mt-1">
                                                <MdError className="text-lg mr-1" />
                                                {errors.presentUpazila.message}
                                            </span>
                                        )}
                                    </div>

                                    <div className="w-1/2">
                                        <label className="text-[#006837] font-bold text-xl">Local address <span className="text-red-500 font-bold">*</span></label>
                                        <input
                                            type="text"
                                            name="presentLocalAddress"
                                            {...register("presentLocalAddress", { required: "Present Local address field is required." })}
                                            className={`w-full bg-transparent border-2 text-[#39b54a] placeholder:text-[#39b54a] rounded px-3 py-2 ${errors.gender ? "border-red-500 focus:outline-red-500" : "border-[#006837] focus:outline-[#006837]"
                                                } mt-2`}
                                            placeholder="Your local address.."
                                        />
                                        {errors.presentLocalAddress && (
                                            <span className="text-sm text-red-500 flex items-center mt-1">
                                                <MdError className="text-lg mr-1" />
                                                {errors.presentLocalAddress.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* permanent adress */}
                        <div className="my-10 ">
                            <label className="flex justify-center  underline underline-offset-4 text-3xl font-bold text-[#006837]">Permanent Adress <span className="text-red-500 font-bold">*</span></label>

                            <div className="flex gap-6 mt-8">
                                <div className="w-1/2 flex gap-4">
                                    <div className="w-1/2">
                                        <label className="text-[#006837] font-bold text-xl">Division <span className="text-red-500 font-bold">*</span></label>
                                        <select
                                            name="permanentDivision"
                                            {...register("permanentDivision", { required: "Permanent Division field is required." })}
                                            className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 ${errors.permanentDivision ? "border-red-500 focus:outline-red-500" : "border-[#006837] focus:outline-[#006837]"
                                                } mt-2`}
                                        >
                                            <option value="">Select division</option>
                                            {["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"].map((division) => (
                                                <option key={division} value={division}>
                                                    {division}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.permanentDivision && (
                                            <span className="text-sm text-red-500 flex items-center mt-1">
                                                <MdError className="text-lg mr-1" />
                                                {errors.permanentDivision.message}
                                            </span>
                                        )}
                                    </div>

                                    <div className="w-1/2">
                                        <label className="text-[#006837] font-bold text-xl">District <span className="text-red-500 font-bold">*</span></label>
                                        <input
                                            type="text"
                                            name="permanentDistrict"
                                            {...register("permanentDistrict", { required: "Permanent District field is required." })}
                                            className={`w-full bg-transparent border-2 text-[#39b54a] placeholder:text-[#39b54a] rounded px-3 py-2 ${errors.permanentDivision ? "border-red-500 focus:outline-red-500" : "border-[#006837] focus:outline-[#006837]"
                                                } mt-2`}
                                            placeholder="Your distict"
                                        />
                                        {errors.permanentDistrict && (
                                            <span className="text-sm text-red-500 flex items-center mt-1">
                                                <MdError className="text-lg mr-1" />
                                                {errors.permanentDistrict.message}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="w-1/2 flex gap-4">
                                    <div className="w-1/2">
                                        <label className="text-[#006837] font-bold text-xl">Upazila <span className="text-red-500 font-bold">*</span></label>
                                        <input
                                            type="text"
                                            name="permanentUpazila"
                                            {...register("permanentUpazila", { required: "Permanent Upazila field is required." })}
                                            className={`w-full bg-transparent border-2 text-[#39b54a] placeholder:text-[#39b54a] rounded px-3 py-2 ${errors.permanentDivision ? "border-red-500 focus:outline-red-500" : "border-[#006837] focus:outline-[#006837]"
                                                } mt-2`}
                                            placeholder="Your upazila"
                                        />
                                        {errors.permanentUpazila && (
                                            <span className="text-sm text-red-500 flex items-center mt-1">
                                                <MdError className="text-lg mr-1" />
                                                {errors.permanentUpazila.message}
                                            </span>
                                        )}
                                    </div>

                                    <div className="w-1/2">
                                        <label className="text-[#006837] font-bold text-xl">Local address <span className="text-red-500 font-bold">*</span></label>
                                        <input
                                            type="text"
                                            name="permanentLocalAddress"
                                            {...register("permanentLocalAddress", { required: "Permanent Local address field is required." })}
                                            className={`w-full bg-transparent border-2 text-[#39b54a] rounded placeholder:text-[#39b54a] px-3 py-2 ${errors.permanentDivision ? "border-red-500 focus:outline-red-500" : "border-[#006837] focus:outline-[#006837]"
                                                } mt-2`}
                                            placeholder="Your local address.."
                                        />
                                        {errors.permanentLocalAddress && (
                                            <span className="text-sm text-red-500 flex items-center mt-1">
                                                <MdError className="text-lg mr-1" />
                                                {errors.permanentLocalAddress.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <button
                                type="submit"
                                className="border-2 border-[#006837] px-4 py-2 w-[150px] uppercase text-xl font-bold text-[#006837] bg-white rounded-lg hover:border-[#39b54a] hover:text-white hover:bg-[#39b54a]">Next</button>
                        </div>
                    </form>
                )
            }
        </div>
    );
};

export default BdFormOne;