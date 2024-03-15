import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "./themeprovider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Practice",
    description: "Practice for NextJS/React",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute="class">
                    <Navbar />
                    {children}
                    {/*<Footer />*/}
                </ThemeProvider>
            </body>
        </html>
    );
}
