import Image from "next/image";

const Initiatives = () => {
    return (
        <div className="relative mb-[120px] bg-cover bg-fixed  bg-no-repeat bg-center h-[620px]"
            style={{ backgroundImage: `url(/initiatives.jpg)` }}
        >
            <div className="absolute flex flex-col pt-[60px] top-0 items-center h-[620px] w-full bg-[#006837] bg-opacity-50">
                <div className="flex flex-col justify-center items-center text-white py-[70px]">
                    <h1 className="text-5xl font-bold uppercase">Our Initiatives</h1>
                    <p className="w-[100px] bg-white py-[3px] mt-2"></p>
                </div>

                <div className="flex justify-center gap-16">
                    <Image src="/shit_bostro.png" width={150} height={150} alt="about" />
                    <Image src="/green_uniform.png" width={150} height={150} alt="about" />
                    <Image src="/eid_bazar.png" width={150} height={150} alt="about" />
                </div>

                <div className="relative w-[300px] flex mx-auto mt-16">
                    <Image src="/be_a_friend_bar.png" width={300} height={300} alt="be_a_friend_bar" />
                    <p className="z-10 pl-8 pt-2 absolute top-0 text-3xl font-bold text-[#3db54a]">Be a Friend!</p>
                </div>
            </div>
        </div>
    );
};

export default Initiatives;