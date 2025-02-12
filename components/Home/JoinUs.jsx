import Image from "next/image";

const JoinUs = () => {
    return (
        <div className="mb-[80px] text-[#006837]">
            <div  data-aos="fade-down" data-aos-duration="1000" className="flex flex-col justify-center items-center mb-[80px]">
                <h2 className="text-5xl font-bold uppercase">Join Us</h2>
                <p className="w-[100px] bg-[#006837] py-[3px] mt-2"></p>
            </div>

            <div className="lg:w-[960px] mx-auto flex flex-col lg:flex-row justify-center gap-[50px] items-center">
                <div data-aos="zoom-in-up"  data-aos-duration="1000" className="w-[285px] flex flex-col justify-center items-center text-center">
                    <div className="w-[80px] h-[80px]">
                        <Image src="/donation.png" width={250} height={250} alt="donation" />
                    </div>

                    <h3 className="font-bold text-2xl mb-4 mt-3">DONATIONS</h3>
                    <p className="text-sm">Bondhu Poribar is always with you atany crisis <br />inBangladesh to help and support you.</p>
                </div>

                <div data-aos="zoom-in-up" data-aos-duration="1000" className="w-[285px] flex flex-col justify-center items-center text-center">
                    <div className="w-[80px] h-[80px]">
                        <Image src="/volunteer.png" width={250} height={250} alt="volunteer" />
                    </div>

                    <h3 className="font-bold text-2xl mb-4 mt-3">VOLUNTEER</h3>
                    <p className="text-sm">Bondhu Poribar will be proud to have you  <br />as a volunteer</p>
                </div>

                <div data-aos="zoom-in-up" data-aos-duration="1000" className="w-[285px] flex flex-col justify-center items-center text-center">
                    <div className="w-[80px] h-[80px]">
                        <Image src="/camping.png" width={250} height={250} alt="camping" />
                    </div>

                    <h3 className="font-bold text-2xl mb-4 mt-3">CAMPING</h3>
                    <p className="text-sm">Underyourleadership <br />BondhuPoribarwillhaveanauspiciousstart</p>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;