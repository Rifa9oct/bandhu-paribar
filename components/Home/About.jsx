import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <div className="w-full flex justify-center items-center relative py-20 lg:scroll-py-0.5  lg:h-[600px] bg-[#006837]" >
            <Image src="/about_top.png" width={1000} height={1000} alt="about" className="absolute right-0 top-0" />
            <Image src="/about_bottom.png" width={720} height={720} alt="about" className="absolute left-0 bottom-0" />

            <div className="lg:w-[960px] flex flex-col gap-16 lg:gap-0 lg:flex-row justify-between items-center z-10 text-white">
                <div  data-aos="fade-right" data-aos-duration="1000" className="w-[320px] md:w-[520px]">
                    <Image src="/about.jpg" width={520} height={520} alt="about banner" className="border-[4px] border-white rounded-2xl" />
                </div>
                <div className="text-sm w-[350px]">
                    <h2 data-aos="fade-down" data-aos-duration="1000" className="text-3xl font-bold">About Bondhu Poribar</h2>

                    <li data-aos="fade-up" data-aos-duration="1000" className="mt-6 mb-4">Our mission is to empower the youth of Bangladeshthrough volunteerism, fostering self-resilience for ameaningful future.</li>

                    <li data-aos="fade-up" data-aos-duration="1000">Bondhu Poribar was founded in 2017 by a group ofpassionate friend who wanted tomake a positive impacton their communities.</li>

                    <li data-aos="fade-up" data-aos-duration="1000" className="my-4">Our values include a commitmentto diversity, equity, andinclusion, as well as a focus on community-drivensolutionsand sustainable development</li>

                    <li data-aos="fade-up" data-aos-duration="1000" className="mb-6">We believe that volunteerism is a powerful tool for creatingpositive change in Bang adesh and we are dedicated toproviding opportunities for individuals to get involved andmake a difference.</li>

                    <Link href="#">
                        <div data-aos="fade-up" data-aos-duration="1000" className="relative w-[200px]">
                            <button className="w-[180px] text-start bg-white text-[#009245] font-bold text-lg py-[6px] rounded-lg pl-3">KNOW MORE</button>

                            <Image src="/button.png" alt="My Icon" width={56} height={56} className="absolute top-0 right-0  rounded-lg" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;