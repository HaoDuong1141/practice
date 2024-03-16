"use client";
import { useState, useEffect } from "react";

const UseEffectPage = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, []);

    return (
        <ul className="flex flex-col items-center justify-center pt-20 font-bold text-xl gap-4">
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};

export default UseEffectPage;
