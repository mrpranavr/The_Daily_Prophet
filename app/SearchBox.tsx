"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { InputBase, IconButton } from "@mui/material";

const SearchBox = () => {
    const [input, setInput] = useState("");
    const router = useRouter();


    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!input) {
            return
        }
        console.log(input)
    }

    return (
        <form onSubmit={handleSearch} className="mt-[10px] xs:max-w-[465px] sm:px-0 px-10 mx-auto flex justify-center items-center">
            <div className="relative w-full">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search For Keywords."
                    className="w-full bg-[#E2E2E2] placeholder:text-[#A7A7A7] font-poppins text-[16px] 
                    px-[30px] py-[18px] pr-[60px] rounded-[15px] focus:outline-none dark:bg-[#283F51] dark:placeholder:text-[#748898]"
                />
                <button
                    type="submit"
                    disabled={!input}
                    className="absolute right-[20px] top-[50%] -translate-y-[50%]"
                >
                    <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`fill-accentRed dark:fill-lightWhite ${!input && 'fill-[#FFB3A4] dark:fill-[#8E99A1]'}`}
                    >
                        <path
                            d="M27.8512 25.8987L22.75 20.8387C24.7301 18.3697 25.6891 15.236 25.4296 12.0817C25.1702 8.92747 23.712 5.99251 21.3551 3.88032C18.9981 1.76813 15.9215 0.639256 12.7578 0.725826C9.59404 0.812397 6.58373 2.10783 4.34581 4.34575C2.10789 6.58367 0.812458 9.59398 0.725888 12.7577C0.639317 15.9214 1.76819 18.9981 3.88038 21.355C5.99257 23.712 8.92753 25.1701 12.0818 25.4295C15.236 25.689 18.3698 24.7301 20.8387 22.7499L25.8987 27.8099C26.0266 27.9388 26.1786 28.0411 26.3462 28.1109C26.5138 28.1807 26.6935 28.2167 26.875 28.2167C27.0565 28.2167 27.2362 28.1807 27.4038 28.1109C27.5713 28.0411 27.7234 27.9388 27.8512 27.8099C28.0991 27.5535 28.2376 27.2109 28.2376 26.8543C28.2376 26.4977 28.0991 26.1551 27.8512 25.8987ZM13.125 22.7499C11.2213 22.7499 9.36045 22.1854 7.77763 21.1278C6.1948 20.0702 4.96114 18.567 4.23265 16.8083C3.50416 15.0495 3.31355 13.1143 3.68493 11.2472C4.05631 9.38012 4.97301 7.66511 6.31909 6.31903C7.66517 4.97295 9.38018 4.05625 11.2472 3.68487C13.1143 3.31349 15.0496 3.5041 16.8083 4.23259C18.5671 4.96108 20.0703 6.19474 21.1279 7.77757C22.1855 9.36039 22.75 11.2213 22.75 13.1249C22.75 15.6776 21.7359 18.1258 19.9309 19.9308C18.1259 21.7359 15.6777 22.7499 13.125 22.7499Z"
                            // fill="#FF4C29"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default SearchBox;
