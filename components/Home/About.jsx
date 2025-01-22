import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <div className="w-full flex justify-center items-center relative h-[600px] bg-[#006837]" >
            <Image src="/about_top.png" width={1000} height={1000} alt="about" className="absolute right-0 top-0" />
            <Image src="/about_bottom.png" width={720} height={720} alt="about" className="absolute left-0 bottom-0" />

            <div className="w-[960px] flex justify-between items-center z-10 text-white">
                <div className="w-[520px]">
                    <Image src="/about.jpg" width={520} height={520} alt="about banner" className="border-[4px] border-white rounded-2xl" />
                </div>
                <div className="text-sm w-[350px]">
                    <h2 className="text-2xl font-bold">About Bondhu Poribar</h2>

                    <li className="mt-6 mb-4">Our mission is to empower the youth of Bangladeshthrough volunteerism, fostering self-resilience for ameaningful future.</li>

                    <li>Bondhu Poribar was founded in 2017 by a group ofpassionate friend who wanted tomake a positive impacton their communities.</li>

                    <li className="my-4">Our values include a commitmentto diversity, equity, andinclusion, as well as a focus on community-drivensolutionsand sustainable development</li>

                    <li className="mb-6">We believe that volunteerism is a powerful tool for creatingpositive change in Bang adesh and we are dedicated toproviding opportunities for individuals to get involved andmake a difference.</li>

                    <Link href="#">
                        <div className="relative w-[200px]">
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