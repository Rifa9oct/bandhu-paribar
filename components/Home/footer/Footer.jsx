import NewsUpdateForm from "./NewsUpdateForm";

const Footer = () => {
    return (
        <div className="bg-[#006837] pt-10">
            <div className="flex gap-10 justify-center text-white">

                <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-col justify-center text-center gap-2">
                    <h3 className="text-xl mb-3 font-bold text-[#fdff06]">HELP</h3>
                    <h4>FAQ</h4>
                    <h4>Contact</h4>
                    <h4>UsVolunteers</h4>
                    <h4>Donation</h4>
                    <h4>Camping</h4>
                </div>

                <div className="hidden md:block px-10">
                    <h2 className="text-2xl font-semibold text-center">FOR NEWS,UPDATS & <br />PROMOTIONAL EVENTS</h2>

                    <div>
                        <NewsUpdateForm />
                    </div>
                </div>

                <div data-aos="fade-left" className="flex flex-col justify-center gap-2 text-center">
                    <h3 className="text-xl mb-3 font-bold text-[#fdff06]">VISIT</h3>
                    <h4>About </h4>
                    <h4>UsOurInitiativ</h4>
                    <h4>es Media</h4>
                    <h4>Gallary</h4>
                    <h4>Video</h4>
                </div>
            </div>

            <div className="md:hidden  block px-10">
                <h2 className="text-2xl font-semibold text-center text-white mt-8">FOR NEWS,UPDATS & <br />PROMOTIONAL EVENTS</h2>

                <div>
                    <NewsUpdateForm />
                </div>
            </div>

            <p className="md:h-10 bg-[#c2272d] w-full mt-10 text-center text-white py-2 text-sm">Copyright © 2025 - All right reserved by ( https://github.com/Rifa9oct )</p>
        </div>
    );
};

export default Footer;