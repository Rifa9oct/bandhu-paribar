import BdFormOne from "@/components/auth/register/BdFormOne";
import Button from "@/components/auth/register/Button";
import InterFormOne from "@/components/auth/register/InterFormOne";
import InterFormTwo from "@/components/auth/register/InterFormTwo";

const RegisterPage = ({ searchParams: { query, page } }) => {

    return (
        <div>
            <div className='relative h-[450px] bg-center bg-cover bg-no-repeat border-b-[20px] border-[#006837]'
                style={{ backgroundImage: `url(/banner1.png)` }}
            >
                <div className="absolute inset-0 flex flex-col justify-center items-center font-bold top-0 bg-[#006837] bg-opacity-35 h-[450px] text-white">
                    <h1 className="uppercase text-5xl mb-3">Volunteer Registration</h1>
                    <p className="text-lg">Be a friend and reach out for a smile on another friend&apos;s face.</p>
                </div>
            </div>

            <div className="py-24 bg-[#e9f5f0] text-center text-[#006837]">
                <div className="flex gap-3 items-center">
                    <p className="h-10 w-full bg-[#006837]"></p>
                    <div>
                        <h1 className="w-[320px] mb-3 h-10 text-5xl font-bold">BE A FRIEND</h1>
                    </div>
                    <p className="h-10 w-full bg-[#006837]"></p>
                </div>
                <p className="w-[330px] mx-auto text-lg font-medium mt-3">Be a friend and reach out for a smile on <br /> another friend&apos;s face.</p>
            </div>

            <Button query={query} />

            {
                query === "bd" && <BdFormOne />
            }

            {
                (query === "inter" ) && <InterFormOne />
            }

            {
                (query === "inter" && page === 2) && <InterFormTwo />
            }

        </div>
    );
};

export default RegisterPage;