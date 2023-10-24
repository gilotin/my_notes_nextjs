"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../login/login.module.css";
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    async function onLogin(e: any) {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch("/api/users/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if (!response.ok) {
                throw new Error(`Login failed ${response.status}`);
            }

            const data = await response.json();

            console.log("Login successful", data);
            // you can implement toast latter
            router.push("/profile");
        } catch (error: any) {
            console.log(":Login failed", error.message), toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={(e) => onLogin(e)}>
                <h1>Login</h1>

                <label className={styles.label} htmlFor="email">
                    email
                </label>
                <input
                    type="text"
                    id="email"
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="email"
                />
                <label className={styles.label} htmlFor="password">
                    password
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="password"
                />
                <button>Login</button>
                <Link href="/register">Not registered ?</Link>
            </form>
        </div>
    );
}
