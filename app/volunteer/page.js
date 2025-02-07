import BdForm from "@/components/volunteer/BdForm";
import Button from "@/components/volunteer/Button";
import InterForm from "@/components/volunteer/InterForm";
import Image from "next/image";

const VolunteerPage = ({ searchParams: { query, page, stored } }) => {

    return (
        <div>
            <div className='relative h-[450px] bg-center bg-cover bg-no-repeat border-b-[20px] border-[#006837]'
                style={{ backgroundImage: `url(/banner1.png)` }}
            >
                <div className="absolute inset-0 flex flex-col justify-center items-center font-bold top-0 bg-[#006837] bg-opacity-35 h-[450px] text-white">
                    <h1 className="uppercase text-5xl mb-3">Volunteer Registration</h1>
                    <p className="text-lg">Be a friend and reach out for a smile on another friend&apos;s face.</p>
                </div>
            </div >

            <div className="py-24 bg-[#e9f5f0] text-center text-[#006837]">
                <div className="flex gap-3 items-center">
                    <p className="h-10 w-full bg-[#006837]"></p>
                    <div>
                        <h2 className="w-[320px] mb-3 h-10 text-5xl font-bold">BE A FRIEND</h2>
                    </div>
                    <p className="h-10 w-full bg-[#006837]"></p>
                </div>
                <p className="w-[330px] mx-auto text-lg font-medium mt-3">Be a friend and reach out for a smile on <br /> another friend&apos;s face.</p>
            </div>

            {
                stored === "true" ? (
                    <div>
                        <div className="pb-[120px] bg-[#e9f5f0] text-center text-[#006837]">
                            <div className="flex gap-3">
                                <p className="h-[64px] w-full bg-[#98c4af]"></p>
                                <div>
                                    <h3 className="w-[110px] text-2xl font-bold">Serial No</h3>
                                    <p className="mx-auto text-2xl font-medium">190501</p>
                                </div>
                                <p className="h-[64px] w-full bg-[#98c4af]"></p>
                            </div>
                        </div>

                        <div className="bg-[#e9f5f0]">
                            <Image src="/thank-you.png" width={400} height={400} alt="thank you" className="mx-auto"/>
                        </div>


                        <div className="py-[120px] bg-[#e9f5f0] text-center text-[#006837]">
                            <div className="flex gap-3">
                                <p className="h-8 w-full bg-[#006837]"></p>
                                <div>
                                    <h3 className="w-[680px] text-3xl font-bold">I sent you a smile. Please check your email now.</h3>
                                </div>
                                <p className="h-8 w-full bg-[#006837]"></p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <Button query={query} />

                        {
                            query === "bd" && <BdForm page={page} />
                        }

                        {
                            (query === "inter") && <InterForm page={page} />
                        }
                    </>
                )
            }

        </div >

    );
};

export default VolunteerPage;