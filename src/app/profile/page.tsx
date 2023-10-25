"use client";
import User from "@/models/userModel";
import { log } from "console";
import { useState, useEffect } from "react";

export default function ProfilePage() {
    const [userData, setUserData] = useState({ username: "", email: "", id: "" });

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const response = await fetch("/api/users/personal");

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                const data = await response.json();

                setUserData(data.data);
            } catch (error: any) {
                console.error("Error", error);
            }
        };
        getUserDetails();
    }, []);

    return (
        <>
            <h1>Welcome {userData.username}</h1>
        </>
    );
}
