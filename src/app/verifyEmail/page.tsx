"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

//TODO: to make sure if you are not verified to not enter the site or be kicked after some time

export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const VerifyUserEmail = async () => {
        try {
            const response = await fetch("/api/users/verifyEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token: token }),
            });
            console.log(`third`, token);

            if (!response.ok) {
                throw new Error("cannot take the token");
            }

            setVerified(true);
        } catch (error: any) {
            setError(true);
            console.log(error.message);
        }
    };

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    useEffect(() => {
        if (token.length > 0) {
            VerifyUserEmail();
        }
    }, [token]);

    return (
        <>
            {verified ? <h1>Verified successfully!</h1> : <h1>Error</h1>}

            {verified ? <Link href="/login">Login</Link> : ""}
        </>
    );
}
