"use client";

import { useForm } from "react-hook-form";
import Pagination from "./Pagination";
import BdFormOne from "./BdFormOne";
import BdFormTwo from "./BdFormTwo";

const BdForm = ({ page }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log(data);
        } catch (err) {
            console.error(err);
        }
        reset();
    };

    console.log(errors)
    return (
        <div className="bg-[#e9f5f0] min-h-screen">
            <h1 className="pb-16 text-4xl font-bold text-[#c1272d] text-center">
                ( This form must be duly filled )
            </h1>

            <div className="max-w-[1100px] mx-auto pb-[120px] p-8">
                <form onSubmit={handleSubmit(onSubmit)}>

                    {
                        parseInt(page) !== 2 && <BdFormOne register={register} errors={errors} />
                    }

                    {
                        parseInt(page) === 2 && <BdFormTwo register={register} errors={errors} />
                    }
                    <Pagination errors={errors} />
                </form>
            </div>
        </div>
    );
};

export default BdForm;
