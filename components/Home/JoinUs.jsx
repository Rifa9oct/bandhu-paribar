import Image from "next/image";

const JoinUs = () => {
    return (
        <div className="mb-[80px] text-[#006837]">
            <div className="flex flex-col justify-center items-center mb-[80px]">
                <h1 className="text-5xl font-bold uppercase">Join Us</h1>
                <p className="w-[100px] bg-[#006837] py-[3px] mt-2"></p>
            </div>

            <div className="lg:w-[960px] mx-auto flex flex-col lg:flex-row justify-center gap-[50px] items-center">
                <div className="w-[285px] flex flex-col justify-center items-center text-center">
                    <div className="w-[80px] h-[80px]">
                        <Image src="/donation.png" width={250} height={250} alt="donation" />
                    </div>

                    <h2 className="font-bold text-2xl mb-4 mt-3">DONATIONS</h2>
                    <p className="text-sm">Bondhu Poribar is always with you atany crisis <br />inBangladesh to help and support you.</p>
                </div>

                <div className="w-[285px] flex flex-col justify-center items-center text-center">
                    <div className="w-[80px] h-[80px]">
                        <Image src="/volunteer.png" width={250} height={250} alt="volunteer" />
                    </div>

                    <h2 className="font-bold text-2xl mb-4 mt-3">VOLUNTEER</h2>
                    <p className="text-sm">Bondhu Poribar will be proud to have you  <br />as a volunteer</p>
                </div>

                <div className="w-[285px] flex flex-col justify-center items-center text-center">
                    <div className="w-[80px] h-[80px]">
                        <Image src="/camping.png" width={250} height={250} alt="camping" />
                    </div>

                    <h2 className="font-bold text-2xl mb-4 mt-3">CAMPING</h2>
                    <p className="text-sm">Underyourleadership <br />BondhuPoribarwillhaveanauspiciousstart</p>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;