"use client"

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { MdError } from "react-icons/md";
import { useSession } from "next-auth/react";
import { customRevalidatePath } from "@/actions";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";

const BdFormTwo = ({ setUserData, userData, userId }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { status, update } = useSession();
    const { axiosAuth } = useAxios();

    const [storedInfo, setStoredInfo] = useState(false);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    if (status === "unauthenticated") {
        update();
    }


    const onSubmit = async (data) => {
        setUserData({ ...userData, ...data });

        const payload = { userId, ...userData, ...data }
        try {
            const res = await axiosAuth.post("/api/auth/bdvolunteer", payload);

            if (res.status === 201) {
                const res = await customRevalidatePath();

                if (res.status === 200) {
                    setStoredInfo(true);
                }
            }
        } catch (error) {
            console.loc(error);
        }

        reset();
    };

    const handlePrevious = () => {
        const params = new URLSearchParams(searchParams);
        params.delete('page');
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    useEffect(() => {
        const params = new URLSearchParams(searchParams);

        if (storedInfo) {
            params.set("stored", storedInfo);
        } else {
            params.delete("stored");
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false });

    }, [storedInfo, pathname, replace, searchParams])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* About Father */}
            <div className="mb-5">
                <div className="mb-8">
                    <label className="flex justify-center underline underline-offset-4 text-3xl font-bold text-[#006837]">
                        About Father <span className="text-red-500 font-bold">*</span>
                    </label>
                </div>

                <label className="text-[#006837] font-bold text-xl">
                    Father&apos;s Name <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                    type="text"
                    name="fatherName"
                    {...register("fatherName", { required: "Father Name field is required." })}
                    className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 placeholder-[#39b54a] ${errors.fatherName
                        ? "focus:outline-red-500 border-red-500"
                        : "focus:outline-[#006837] border-[#006837]"
                        } mt-2`}
                    placeholder="Name in English"
                />
                {errors.fatherName && (
                    <span className="text-sm text-red-500 flex items-center mt-1">
                        <MdError className="text-lg mr-1" />
                        {errors.fatherName.message}
                    </span>
                )}
            </div>

            {/* Father Phone Number and Email Address */}
            <div className="flex gap-6 mb-5">
                <div className="w-1/2">
                    <label className="text-[#006837] font-bold text-xl">
                        Phone Number <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                        type="tel"
                        name="fatherPhone"
                        {...register("fatherPhone", { required: "Father's Phone number is required." })}
                        className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 mt-2 placeholder-[#39b54a] ${errors.fatherPhone
                            ? "border-red-500 focus:outline-red-500"
                            : "border-[#006837] focus:outline-[#006837]"
                            }`}
                        placeholder="Father's phone number"
                    />
                    {errors.fatherPhone && (
                        <span className="text-sm text-red-500 flex items-center mt-1">
                            <MdError className="text-lg mr-1" />
                            {errors.fatherPhone.message}
                        </span>
                    )}
                </div>

                <div className="w-1/2">
                    <label className="text-[#006837] font-bold text-xl">
                        Profession <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                        type="text"
                        name="fatherProfession"
                        {...register("fatherProfession", { required: "Father's Profession address is required." })}
                        className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 mt-2 placeholder-[#39b54a] ${errors.fatherProfession
                            ? "border-red-500 focus:outline-red-500"
                            : "border-[#006837] focus:outline-[#006837]"
                            }`}
                        placeholder="Father's profession"
                    />
                    {errors.fatherProfession && (
                        <span className="text-sm text-red-500 flex items-center mt-1">
                            <MdError className="text-lg mr-1" />
                            {errors.fatherProfession.message}
                        </span>
                    )}
                </div>
            </div>

            {/* About Mother */}
            <div className="mb-5">
                <div className="my-8">
                    <label className="flex justify-center underline underline-offset-4 text-3xl font-bold text-[#006837]">
                        About Mother <span className="text-red-500 font-bold">*</span>
                    </label>
                </div>

                <label className="text-[#006837] font-bold text-xl">
                    Mother&apos;s Name <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                    type="text"
                    name="motherName"
                    {...register("motherName", { required: "Mother Name field is required." })}
                    className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 placeholder-[#39b54a] ${errors.motherName
                        ? "focus:outline-red-500 border-red-500"
                        : "focus:outline-[#006837] border-[#006837]"
                        } mt-2`}
                    placeholder="Name in English"
                />
                {errors.motherName && (
                    <span className="text-sm text-red-500 flex items-center mt-1">
                        <MdError className="text-lg mr-1" />
                        {errors.motherName.message}
                    </span>
                )}
            </div>

            {/* Mother Phone Number and Email Address */}
            <div className="flex gap-6 mb-5">
                <div className="w-1/2">
                    <label className="text-[#006837] font-bold text-xl">
                        Phone Number <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                        type="tel"
                        name="motherPhone"
                        {...register("motherPhone", { required: "Mother's Phone number is required." })}
                        className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 mt-2 placeholder-[#39b54a] ${errors.motherPhone
                            ? "border-red-500 focus:outline-red-500"
                            : "border-[#006837] focus:outline-[#006837]"
                            }`}
                        placeholder="Mother's phone number"
                    />
                    {errors.motherPhone && (
                        <span className="text-sm text-red-500 flex items-center mt-1">
                            <MdError className="text-lg mr-1" />
                            {errors.motherPhone.message}
                        </span>
                    )}
                </div>

                <div className="w-1/2">
                    <label className="text-[#006837] font-bold text-xl">
                        Profession <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                        type="text"
                        name="motherProfession"
                        {...register("motherProfession", { required: "Mother's Profession address is required." })}
                        className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 mt-2 placeholder-[#39b54a] ${errors.motherProfession
                            ? "border-red-500 focus:outline-red-500"
                            : "border-[#006837] focus:outline-[#006837]"
                            }`}
                        placeholder="Mother's profession"
                    />
                    {errors.motherProfession && (
                        <span className="text-sm text-red-500 flex items-center mt-1">
                            <MdError className="text-lg mr-1" />
                            {errors.motherProfession.message}
                        </span>
                    )}
                </div>
            </div>

            {/* emergency contact  */}
            <div className="mb-5">
                <label className="flex justify-center text-3xl font-bold text-[#006837]">
                    Emergency Contact Persone Name <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                    type="text"
                    name="contactPersone"
                    {...register("contactPersone", { required: "Emergency contact field is required." })}
                    className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 placeholder-[#39b54a] ${errors.contactPersone
                        ? "focus:outline-red-500 border-red-500"
                        : "focus:outline-[#006837] border-[#006837]"
                        } mt-3`}
                    placeholder="Name in English"
                />
                {errors.contactPersone && (
                    <span className="text-sm text-red-500 flex items-center mt-1">
                        <MdError className="text-lg mr-1" />
                        {errors.contactPersone.message}
                    </span>
                )}
            </div>

            {/* Relationship */}
            <div className="flex gap-6 mb-5">
                <div className="w-1/2">
                    <label className="text-[#006837] font-bold text-xl">
                        Relationship With Your <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                        type="tel"
                        name="relationship"
                        {...register("relationship", { required: "Relationship field is required." })}
                        className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 mt-2 placeholder-[#39b54a] ${errors.relationship
                            ? "border-red-500 focus:outline-red-500"
                            : "border-[#006837] focus:outline-[#006837]"
                            }`}
                        placeholder="Describe your relationship with each other."
                    />
                    {errors.relationship && (
                        <span className="text-sm text-red-500 flex items-center mt-1">
                            <MdError className="text-lg mr-1" />
                            {errors.relationship.message}
                        </span>
                    )}
                </div>

                <div className="w-1/2">
                    <label className="text-[#006837] font-bold text-xl">
                        Contact Person Phone Number <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                        type="text"
                        name="contactPersonePhone"
                        {...register("contactPersonePhone", { required: "Contact Persone phone number is required." })}
                        className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 mt-2 placeholder-[#39b54a] ${errors.contactPersonePhone
                            ? "border-red-500 focus:outline-red-500"
                            : "border-[#006837] focus:outline-[#006837]"
                            }`}
                        placeholder="This number will be contacted in case of any emergency."
                    />
                    {errors.contactPersonePhone && (
                        <span className="text-sm text-red-500 flex items-center mt-1">
                            <MdError className="text-lg mr-1" />
                            {errors.contactPersonePhone.message}
                        </span>
                    )}
                </div>
            </div>

            <div>
                <label className="text-[#006837] font-bold text-xl">
                    Experience In Social Work / Training on Emergency Response (IfAny)
                </label>
                <textarea
                    cols="4" rows="4"
                    name="experienc"
                    {...register("experienc", { required: false, maxLength: 250 })}
                    className={`w-full bg-transparent border-2 text-[#39b54a] rounded px-3 py-2 placeholder-[#39b54a] focus:outline-[#006837] border-[#006837] mt-2`}
                    placeholder="You can tell if you have done any social work or any training before."
                />
                {errors.experienc?.type === "maxLength" && <p className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" />Review message must be less than 250 characters.</p>}
            </div>

            {/* Days for Volunteerism */}
            <div className="mb-10 mt-3">
                <label className="text-[#006837] font-bold text-xl">
                    You are available for Volunteerism at <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-4 gap-4 mt-4">
                    {["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                        <div key={day}>
                            <label className="flex items-center text-lg space-x-2 text-black">
                                <input
                                    type="checkbox"
                                    value={day}
                                    name="availableDays"
                                    {...register("availableDays", { required: "Please select at least one day" })}
                                    className="accent-[#39b54a]"
                                />
                                <span>{day}</span>
                            </label>
                        </div>
                    ))}
                </div>
                {errors.availableDays && (
                    <p className="text-red-500 text-sm mt-2"><MdError className="text-lg inline" /> {errors.availableDays.message}</p>
                )}
            </div>

            {/* Attached File Section */}
            <div className="mb-10">
                <label className="text-[#006837] font-bold underline underline-offset-4 text-2xl block text-center">
                    Attached File <span className="text-red-500">*</span>
                </label>
                <div className="w-full grid grid-cols-2 gap-6 mt-6 text-[#006837]">
                    {/* Picture */}
                    <div className="flex flex-col">
                        <label className="font-bold text-xl">Your Picture</label>
                        <input
                            type="file"
                            name="picture"
                            {...register("picture", { required: "Please upload your picture." })}
                            className="mt-2 border-2 border-[#006837] px-3 py-2 file:border file:border-[#006837] file:text-[#39b54a] file:rounded file:bg-[#cef2de] file:px-3 file:py-1"
                        />
                        <span className=" text-[#006837] mt-1">( recommended image size 45*55px )</span>
                        {errors.picture && (
                            <p className="text-red-500 text-sm mt-2"><MdError className="text-lg inline" /> {errors.picture.message}</p>
                        )}
                    </div>

                    {/* Signature */}
                    <div className="flex flex-col">
                        <label className="font-bold text-xl">Your Signature</label>
                        <input
                            type="file"
                            name="signature"
                            {...register("signature", { required: "Please upload your signature." })}
                            className="mt-2 border-2 border-[#006837] px-3 py-2 file:border file:border-[#006837] file:text-[#39b54a] file:rounded file:bg-[#cef2de] file:px-3 file:py-1"
                        />
                        <span className=" text-[#006837] mt-1">( recommended image size 45*55px )</span>
                        {errors.signature && (
                            <p className="text-red-500 text-sm mt-2"><MdError className="text-lg inline" /> {errors.signature.message}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Declaration */}
            <div>
                <div className="flex items-center space-x-2 mt-3">
                    <input
                        type="checkbox"
                        name="declaration"
                        {...register("declaration", { required: "You must agree to the declaration." })}
                        className="accent-[#39b54a]"
                    />
                    <label className="text-[#006837] font-bold text-2xl">
                        I do hereby declare that the information furnished above is true.
                    </label>
                </div>
                {errors.declaration && (
                    <p className="text-red-500 text-sm mt-2"><MdError className="text-lg inline" /> {errors.declaration.message}</p>
                )}
            </div>

            <div className="flex w-full gap-8 justify-center mt-10">
                <p
                    onClick={handlePrevious}
                    className="cursor-pointer border-2 text-center border-[#006837] px-4 py-2 w-[150px] uppercase text-xl font-bold text-[#006837] bg-white rounded-lg hover:border-[#39b54a] hover:text-white hover:bg-[#39b54a]">Previous</p>

                <button
                    type="submit"
                    className="border-2 border-[#006837] px-4 py-2 w-[150px] uppercase text-xl font-bold text-[#006837] bg-white rounded-lg hover:border-[#39b54a] hover:text-white hover:bg-[#39b54a]">Submit</button>
            </div>
        </form>
    );
};

export default BdFormTwo;