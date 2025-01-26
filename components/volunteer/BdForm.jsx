import BdFormOne from "./BdFormOne";

const BdForm = ({ page }) => {

    return (
        <div className="bg-[#e9f5f0] min-h-screen">
            <h1 className="pb-16 text-4xl font-bold text-[#c1272d] text-center">
                ( This form must be duly filled )
            </h1>

            <div className="max-w-[1100px] mx-auto pb-[120px] p-8">
                <BdFormOne
                    page={page}
                />
            </div>
        </div>
    );
};

export default BdForm;
