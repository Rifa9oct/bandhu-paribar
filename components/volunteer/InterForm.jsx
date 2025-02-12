import { auth } from "@/auth";
import InterFormOne from "./InterFormOne";

const InterForm = async ({ page }) => {
    const session = await auth();
    const user = session?.user;

    return (
        <div className="bg-[#e9f5f0] min-h-screen">
            <h3 className="pb-16 text-2xl md:text-4xl font-bold text-[#c1272d] text-center">
                ( This form must be duly filled )
            </h3>

            <div className="max-w-[1100px] mx-auto pb-[120px] p-8">
                <InterFormOne
                    page={page}
                    userId={user?.userId}
                />
            </div>
        </div>
    );
};

export default InterForm;
