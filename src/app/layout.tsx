import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "noteBook",
    description: "portfolio project created by Nikolay Toshev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <nav>
                        <ul role="list">
                            <li>
                                <Link href="/login">Login</Link>
                            </li>
                            <li>
                                <Link href="/register">Register</Link>
                            </li>
                            <li>
                                <Link href="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link href="/logout">Logout</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                {children}
                <footer>
                    <p>This is test app - 2023 All rights reserved</p>
                </footer>
            </body>
        </html>
    );
}
