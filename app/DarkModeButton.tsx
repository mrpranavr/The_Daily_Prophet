"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@mui/material";

const DarkModeButton = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setMounted(true);
        const currentTheme = theme === "system" ? systemTheme : theme;
        if (currentTheme === "dark") {
            setChecked(true);
        }
    }, []);

    if (!mounted) {
        return null;
    }

    const currentTheme = theme === "system" ? systemTheme : theme;

    const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        // console.log(e.target.checked)
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <div className="flex items-center gap-[5px]">
            {currentTheme === "dark" ? (
                <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-lightWhite xs:inline hidden"
                    // onClick={() => setTheme("light")}
                >
                    <path
                        d="M4.732 20L3.809 20.923C3.56687 21.1666 3.43097 21.4961 3.43097 21.8395C3.43097 22.1829 3.56687 22.5124 3.809 22.756C4.05257 22.9981 4.38206 23.134 4.7255 23.134C5.06894 23.134 5.39843 22.9981 5.642 22.756L6.565 21.833C6.77797 21.5843 6.88926 21.2644 6.87662 20.9372C6.86399 20.6101 6.72835 20.2997 6.49683 20.0682C6.26531 19.8366 5.95495 19.701 5.62777 19.6884C5.30059 19.6757 4.98069 19.787 4.732 20ZM3.9 13.5C3.9 13.1552 3.76304 12.8246 3.51924 12.5808C3.27544 12.337 2.94478 12.2 2.6 12.2H1.3C0.955218 12.2 0.624558 12.337 0.380761 12.5808C0.136964 12.8246 0 13.1552 0 13.5C0 13.8448 0.136964 14.1754 0.380761 14.4192C0.624558 14.663 0.955218 14.8 1.3 14.8H2.6C2.94478 14.8 3.27544 14.663 3.51924 14.4192C3.76304 14.1754 3.9 13.8448 3.9 13.5ZM13 4.4C13.3448 4.4 13.6754 4.26304 13.9192 4.01924C14.163 3.77544 14.3 3.44478 14.3 3.1V1.8C14.3 1.45522 14.163 1.12456 13.9192 0.880761C13.6754 0.636964 13.3448 0.5 13 0.5C12.6552 0.5 12.3246 0.636964 12.0808 0.880761C11.837 1.12456 11.7 1.45522 11.7 1.8V3.1C11.7 3.44478 11.837 3.77544 12.0808 4.01924C12.3246 4.26304 12.6552 4.4 13 4.4ZM4.732 7.065C4.97414 7.30517 5.30096 7.44056 5.642 7.442C5.81309 7.44299 5.98269 7.4102 6.14108 7.3455C6.29947 7.28081 6.44353 7.18549 6.565 7.065C6.80713 6.82143 6.94303 6.49194 6.94303 6.1485C6.94303 5.80506 6.80713 5.47557 6.565 5.232L5.642 4.309C5.39331 4.09603 5.07341 3.98474 4.74623 3.99738C4.41905 4.01001 4.10869 4.14564 3.87717 4.37717C3.64564 4.60869 3.51001 4.91905 3.49738 5.24623C3.48474 5.57341 3.59603 5.89331 3.809 6.142L4.732 7.065ZM20.332 7.442C20.673 7.44056 20.9999 7.30517 21.242 7.065L22.165 6.142C22.3011 6.02546 22.4116 5.88205 22.4896 5.72076C22.5677 5.55948 22.6115 5.3838 22.6184 5.20477C22.6254 5.02573 22.5952 4.8472 22.5298 4.68038C22.4645 4.51356 22.3653 4.36205 22.2386 4.23535C22.112 4.10866 21.9604 4.00953 21.7936 3.94417C21.6268 3.87881 21.4483 3.84865 21.2692 3.85556C21.0902 3.86248 20.9145 3.90633 20.7532 3.98436C20.592 4.06239 20.4485 4.17291 20.332 4.309L19.5 5.232C19.2579 5.47557 19.122 5.80506 19.122 6.1485C19.122 6.49194 19.2579 6.82143 19.5 7.065C19.7292 7.29297 20.0351 7.42738 20.358 7.442H20.332ZM24.7 12.2H23.4C23.0552 12.2 22.7246 12.337 22.4808 12.5808C22.237 12.8246 22.1 13.1552 22.1 13.5C22.1 13.8448 22.237 14.1754 22.4808 14.4192C22.7246 14.663 23.0552 14.8 23.4 14.8H24.7C25.0448 14.8 25.3754 14.663 25.6192 14.4192C25.863 14.1754 26 13.8448 26 13.5C26 13.1552 25.863 12.8246 25.6192 12.5808C25.3754 12.337 25.0448 12.2 24.7 12.2ZM13 22.6C12.6552 22.6 12.3246 22.737 12.0808 22.9808C11.837 23.2246 11.7 23.5552 11.7 23.9V25.2C11.7 25.5448 11.837 25.8754 12.0808 26.1192C12.3246 26.363 12.6552 26.5 13 26.5C13.3448 26.5 13.6754 26.363 13.9192 26.1192C14.163 25.8754 14.3 25.5448 14.3 25.2V23.9C14.3 23.5552 14.163 23.2246 13.9192 22.9808C13.6754 22.737 13.3448 22.6 13 22.6ZM21.268 20C21.021 19.8626 20.736 19.8095 20.4561 19.8486C20.1762 19.8877 19.9167 20.017 19.7168 20.2168C19.517 20.4167 19.3877 20.6762 19.3486 20.9561C19.3095 21.236 19.3626 21.521 19.5 21.768L20.423 22.691C20.6666 22.9331 20.9961 23.069 21.3395 23.069C21.6829 23.069 22.0124 22.9331 22.256 22.691C22.4981 22.4474 22.634 22.1179 22.634 21.7745C22.634 21.4311 22.4981 21.1016 22.256 20.858L21.268 20ZM13 6.35C11.5859 6.35 10.2035 6.76934 9.02767 7.55499C7.85186 8.34064 6.93543 9.45732 6.39426 10.7638C5.85309 12.0703 5.7115 13.5079 5.98738 14.8949C6.26327 16.2819 6.94424 17.5559 7.94419 18.5558C8.94413 19.5558 10.2181 20.2367 11.6051 20.5126C12.9921 20.7885 14.4297 20.6469 15.7362 20.1057C17.0427 19.5646 18.1594 18.6481 18.945 17.4723C19.7307 16.2965 20.15 14.9141 20.15 13.5C20.1466 11.6048 19.3922 9.78812 18.052 8.44798C16.7119 7.10784 14.8952 6.35344 13 6.35ZM13 18.05C12.1001 18.05 11.2204 17.7831 10.4722 17.2832C9.72391 16.7832 9.14073 16.0726 8.79635 15.2412C8.45197 14.4098 8.36186 13.495 8.53743 12.6123C8.71299 11.7297 9.14634 10.919 9.78266 10.2827C10.419 9.64634 11.2297 9.21299 12.1123 9.03743C12.995 8.86186 13.9098 8.95197 14.7412 9.29635C15.5726 9.64073 16.2832 10.2239 16.7832 10.9722C17.2831 11.7204 17.55 12.6001 17.55 13.5C17.55 14.7067 17.0706 15.864 16.2173 16.7173C15.364 17.5706 14.2067 18.05 13 18.05Z"
                        // fill="#082032"
                    />
                </svg>
            ) : (
                <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-darkTealBlue xs:inline hidden"
                    // onClick={() => setTheme("dark")}
                >
                    <path
                        d="M22.5482 12.6054C22.3824 12.4705 22.1813 12.3841 21.968 12.3561C21.7547 12.3281 21.5376 12.3596 21.3416 12.4471C20.1265 12.9944 18.8053 13.2761 17.469 13.2728C14.997 13.2698 12.6264 12.3051 10.8741 10.5889C9.12187 8.87269 8.13002 6.54424 8.11486 4.11122C8.1201 3.3487 8.21652 2.58944 8.40214 1.84911C8.44153 1.65178 8.42676 1.44769 8.35934 1.25785C8.29193 1.06802 8.17431 0.899307 8.0186 0.7691C7.8629 0.638893 7.67474 0.551899 7.47351 0.517082C7.27228 0.482264 7.06526 0.500882 6.87377 0.571017C5.07226 1.36831 3.50625 2.60325 2.32283 4.15983C1.13942 5.71642 0.377452 7.54354 0.108514 9.46957C-0.160423 11.3956 0.0724959 13.3573 0.785391 15.1704C1.49829 16.9835 2.66776 18.5885 4.18394 19.8345C5.70012 21.0806 7.51325 21.9269 9.45298 22.2938C11.3927 22.6608 13.3954 22.5364 15.2729 21.9324C17.1504 21.3283 18.841 20.2644 20.186 18.8407C21.5311 17.4169 22.4863 15.68 22.9619 13.793C23.0199 13.577 23.0115 13.3489 22.9379 13.1376C22.8643 12.9262 22.7287 12.741 22.5482 12.6054ZM11.6313 20.1722C9.70271 20.1588 7.8255 19.559 6.25666 18.4549C4.68782 17.3509 3.50406 15.7965 2.86745 14.0047C2.23083 12.2129 2.1725 10.2711 2.70042 8.44542C3.22835 6.6197 4.31673 4.99921 5.81654 3.80583V4.11122C5.81959 7.15204 7.04823 10.0675 9.23282 12.2176C11.4174 14.3678 14.3795 15.5771 17.469 15.5801C18.2802 15.583 19.0893 15.4996 19.8822 15.3313C19.0892 16.8079 17.9016 18.0434 16.4476 18.9044C14.9935 19.7655 13.3282 20.2195 11.6313 20.2174V20.1722Z"
                        // fill="#F2F2F2"
                    />
                </svg>
            )}
            <Switch
                checked={checked}
                onChange={changeTheme}
                sx={{
                    // padding: 8,
                    "& .MuiSwitch-track": {
                        borderRadius: 22 / 2,
                        position: "absolute",
                        top: "50%",
                        left: '50%',
                        transform: "translate(-50%, -50%)",
                        width: 40,
                        height: 20,
                    },
                    "& .MuiSwitch-thumb": {
                        boxShadow: "none",
                        width: 16,
                        height: 16,
                        margin: '2px'
                    },
                }}
            />
        </div>
    );
};

export default DarkModeButton;
