"use client";

import { useState } from "react";
import styles from "./resetPassword.module.css";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
    const router = useRouter();

    const [mail, setMail] = useState({ mail: "" });

    const handleReset = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/users/resetPassword");
            if (response.ok) {
                router.push("/");
            }
        } catch (error: any) {
            console.log("Wrong or invalid email", error.message);
            toast.error(error.message); //<-- to Learn Toast
        }
    };

    return (
        <>
            <form className={styles.form} onSubmit={handleReset}>
                <h1>Reset your password</h1>
                <label htmlFor="email">email</label>
                <input
                    type="test"
                    id="email"
                    placeholder="email"
                    onChange={(e) => setMail({ mail: e.target.value })}
                />

                <button type="submit">send</button>
            </form>
        </>
    );
}
