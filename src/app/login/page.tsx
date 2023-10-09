"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../login/login.module.css";

export default function LoginPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const onLogin = async () => {};

    return (
        <div className={styles.container}>
            <form className={styles.form}>
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
                <button onClick={onLogin}>Register</button>
                <Link href="/register">Not registered ?</Link>
            </form>
        </div>
    );
}
