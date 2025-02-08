import Image from "next/image";
import Link from "next/link";

const Initiatives = () => {
    return (
        <div className="relative mb-[120px] bg-cover bg-fixed  bg-no-repeat bg-center h-[620px]"
            style={{ backgroundImage: `url(/initiatives.jpg)` }}
        >
            <div className="absolute flex flex-col pt-[60px] top-0 items-center h-[620px] w-full bg-[#006837] bg-opacity-50">
                <div data-aos="fade-down" data-aos-duration="1000" className="flex flex-col justify-center items-center text-white pb-[70px] md:py-[70px]">
                    <h1 className="text-4xl md:ext-5xl font-bold uppercase">Our Initiatives</h1>
                    <p className="w-[100px] bg-white py-[3px] mt-2"></p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col md:flex-row items-center justify-center gap-16">
                    <div className="flex justify-center gap-16">
                        <Image src="/shit_bostro.png" width={150} height={150} alt="about" />
                        <Image src="/green_uniform.png" width={150} height={150} alt="about" />
                    </div>
                    <Image src="/eid_bazar.png" width={150} height={150} alt="about"/>
                </div>

                <Link href="#" data-aos="fade-up" data-aos-duration="1000" className="relative w-[220px] md:w-[300px] flex mx-auto mt-16">
                    <Image src="/be_a_friend_bar.png" width={300} height={300} alt="be_a_friend_bar" />
                    <p className="z-10 pl-8 pt-1 md:pt-2 absolute top-0 text-xl md:text-3xl font-bold text-[#3db54a]">Be a Friend!</p>
                </Link>
            </div>
        </div>
    );
};

export default Initiatives;