import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import toast from "react-hot-toast";
import Navigation from "./components/navigation/page";

export const metadata: Metadata = {
    title: "noteBookApp",
    description: "portfolio project created by Nikolay Toshev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <Navigation />
                </header>
                {children}
                <footer></footer>
            </body>
        </html>
    );
}
