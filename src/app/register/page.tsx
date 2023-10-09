"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../register/register.module.css";

export default function Register() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
        repeatPassword: "",
    });

    const onRegister = async () => {};

    return (
        <div className={styles.container}>
            <form className={styles.form}>
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
                <button onClick={onRegister}>Register</button>
                <Link href="/login">Are you registered already?</Link>
            </form>
        </div>
    );
}
