import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Navbar = () => {
    return (
        <nav>
            <div className="flex justify-between text-4xl font-bold h-[10vh] p-8 bg-black dark:bg-white text-white dark:text-black">
                <div className="flex items-center gap-24">
                    <Link href="/" className="hover:scale-105">
                        Home
                    </Link>
                </div>
                <div className="flex items-center">
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );  
};

export default Navbar;
