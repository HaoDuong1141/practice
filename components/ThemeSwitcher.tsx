"use client";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const handleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <button
            className="w-12 hover:scale-110 active:scale-100 duration-200"
            onClick={handleTheme}
        >
            {theme === "light" ? (
                <FontAwesomeIcon icon={faMoon} />
            ) : (
                <FontAwesomeIcon icon={faSun} />
            )}
        </button>
    );
};

export default ThemeSwitcher;
