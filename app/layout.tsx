"use client";

import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Header from "./Header";
import Providers from "./Providers";

export const metadata = {
    title: "Next.js",
    description: "Generated by Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-lightWhite dark:bg-darkTealBlue transition-all duration-700">
                <Providers>
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
