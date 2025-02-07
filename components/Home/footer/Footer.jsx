import NewsUpdateForm from "./NewsUpdateForm";

const Footer = () => {
    return (
        <div className="bg-[#006837] pt-10">
            <div className="flex gap-10 justify-center text-white">

                <div className="flex flex-col justify-center text-center gap-2">
                    <h1 className="text-xl mb-3 font-bold text-[#fdff06]">HELP</h1>
                    <h3>FAQ</h3>
                    <h3>Contact</h3>
                    <h3>UsVolunteers</h3>
                    <h3>Donation</h3>
                    <h3>Camping</h3>
                </div>

                <div className="hidden md:block px-10">
                    <h1 className="text-2xl font-semibold text-center">FOR NEWS,UPDATS & <br />PROMOTIONAL EVENTS</h1>

                    <div>
                        <NewsUpdateForm />
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-2 text-center">
                    <h1 className="text-xl mb-3 font-bold text-[#fdff06]">VISIT</h1>
                    <h3>About </h3>
                    <h3>UsOurInitiativ</h3>
                    <h3>es Media</h3>
                    <h3>Gallary</h3>
                    <h3>Video</h3>
                </div>
            </div>

            <div className="md:hidden  block px-10">
                <h1 className="text-2xl font-semibold text-center text-white mt-8">FOR NEWS,UPDATS & <br />PROMOTIONAL EVENTS</h1>

                <div>
                    <NewsUpdateForm />
                </div>
            </div>


            <p className="md:h-10 bg-[#c2272d] w-full mt-10 text-center text-white py-2 text-sm">Copyright © 2025 - All right reserved by ( https://github.com/Rifa9oct )</p>
        </div>
    );
};

export default Footer;