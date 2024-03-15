"use client";
import { useState } from "react";

const UseStatePage = () => {
    const [num, setNum] = useState(0);

    const increment = () => {
        return setNum(num + 1);
    };

    return (
        <div className="flex flex-col items-center justify-center pt-[10vh] gap-12">
            <div className="text-3xl font-bold">{num}</div>
            <button
                className="bg-black text-white rounded-lg p-1"
                onClick={increment}
            >
                Add
            </button>
        </div>
    );
};

export default UseStatePage;
