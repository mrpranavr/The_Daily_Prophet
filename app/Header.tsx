import Link from "next/link";
import React from "react";
import DarkModeButton from "./DarkModeButton";
import Image from "next/image";
import Navlinks from "./Navlinks";
import SearchBox from "./SearchBox";

const Header = () => {
    return (
        <header>
            <div className="grid grid-cols-3 ss:p-10 p-6 items-center">
                <svg
                    width="38"
                    height="26"
                    viewBox="0 0 38 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-darkTealBlue dark:fill-lightWhite sm:w-[37.5px] xs:h-[20px] xs:w-[32px] h-[17px] w-[28px]"
                >
                    <path
                        d="M35.6667 10.9167H2.33333C1.08333 10.9167 0.25 11.75 0.25 13C0.25 14.25 1.08333 15.0833 2.33333 15.0833H35.6667C36.9167 15.0833 37.75 14.25 37.75 13C37.75 11.75 36.9167 10.9167 35.6667 10.9167ZM2.33333 4.66667H35.6667C36.9167 4.66667 37.75 3.83333 37.75 2.58333C37.75 1.33333 36.9167 0.5 35.6667 0.5H2.33333C1.08333 0.5 0.25 1.33333 0.25 2.58333C0.25 3.83333 1.08333 4.66667 2.33333 4.66667ZM35.6667 21.3333H2.33333C1.08333 21.3333 0.25 22.1667 0.25 23.4167C0.25 24.6667 1.08333 25.5 2.33333 25.5H35.6667C36.9167 25.5 37.75 24.6667 37.75 23.4167C37.75 22.1667 36.9167 21.3333 35.6667 21.3333Z"
                        // fill="#082032"
                    />
                </svg>

                <Link href="/" prefetch={false}>
                    <h2
                        className="font-lora font-bold lg:text-[42px] md:text-[37px] 
                    ss:text-[39px] xs:text-[32px] text-[24px] text-center text-accentRed
                    dark:text-lightWhite"
                    >
                        The Daily Prophet
                    </h2>
                </Link>

                <div className="flex justify-end items-center gap-[25px]">
                    {/* DARK MODE BUTTON */}
                    <DarkModeButton />

                    <button className="hidden md:inline font-poppins rounded-[15px] bg-accentRed 
                    text-lightWhite py-[10px] px-[19px] md:text-[18px] text-[16px]">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* NAV LINKS */}
            <Navlinks />

            {/* SEARCH BAR */}
            <SearchBox />

            <div className="border-t-[2px] mt-[55px] xl:max-w-[1500px] xl:mx-auto mx-10 border-dashed
            border-[#8E99A1] dark:border-secondaryDark" />
        </header>
    );
};

export default Header;
