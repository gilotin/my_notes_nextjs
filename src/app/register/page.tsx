"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../register/register.module.css";
import toast from "react-hot-toast";
import axios from "axios";
import { on } from "events";

export default function RegisterPage() {
    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
        repeatPassword: "",
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [loading, setLoading] = useState(true);

    const onRegister = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error(`Registration failed with status ${response.status}`);
            }

            const data = await response.json();
            console.log("Registration successful", data);
            router.push("/login");

            // setLoading(true);
            // const response = await axios.post("/api/users/register", user);
            // console.log("Registration successful", response.data);
            // router.push("/login");
        } catch (error: any) {
            console.log("Registration failed", error.message);

            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (
            user.email.length > 0 &&
            user.password.length > 0 &&
            user.username.length > 0 &&
            user.repeatPassword.length > 0
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={onRegister}>
                <h1>register</h1>

                <label className={styles.label} htmlFor="username">
                    username
                </label>
                <input
                    type="text"
                    id="username"
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder="username"
                />
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
                <label className={styles.label} htmlFor="repeatPassword">
                    Repeat password
                </label>
                <input
                    type="password"
                    id="repeatPassword"
                    onChange={(e) => setUser({ ...user, repeatPassword: e.target.value })}
                    placeholder="password"
                />
                <button
                    type="submit"
                    // onClick={onRegister}
                    className={buttonDisabled ? styles.disabled : styles.button}
                    disabled={buttonDisabled ? true : false}
                >
                    {loading ? "Register" : "Loading..."}
                </button>
                <Link href="/login">Are you registered already?</Link>
            </form>
        </div>
    );
}
