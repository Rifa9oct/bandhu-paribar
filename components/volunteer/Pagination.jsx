"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Pagination = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [currentPage, setCurrentPage] = useState(() => {
        const page = searchParams.get("page");
        return page ? parseInt(page, 10) : 1;
    });

    const params = new URLSearchParams(searchParams);

    if (currentPage > 1) {
        params.set("page", currentPage);
    } else {
        params.delete("page");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });

    return (
        <>
            <div className="flex items-center mt-[60px]">
                {
                    currentPage === 1 ? (
                        <div className="w-full flex justify-center">
                            <button
                                type="submit"
                                onClick={() => setCurrentPage(prev => prev + 1)}
                                className="border-2 border-[#006837] px-4 py-2 w-[150px] uppercase text-xl font-bold text-[#006837] bg-white rounded-lg hover:border-[#39b54a] hover:text-white hover:bg-[#39b54a]">Next</button>
                        </div>
                    ) : (
                        <div className="flex w-full gap-8 justify-center">
                            <button
                                onClick={() => setCurrentPage(prev => prev - 1)}
                                className="border-2 border-[#006837] px-4 py-2 w-[150px] uppercase text-xl font-bold text-[#006837] bg-white rounded-lg hover:border-[#39b54a] hover:text-white hover:bg-[#39b54a]">Previous</button>

                            <button
                                type="submit"
                                className="border-2 border-[#006837] px-4 py-2 w-[150px] uppercase text-xl font-bold text-[#006837] bg-white rounded-lg hover:border-[#39b54a] hover:text-white hover:bg-[#39b54a]">Submit</button>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Pagination;