import "./globals.css";
import styles from "./page.module.css";
import type { Metadata } from "next";
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
                <main className={styles.main}>{children}</main>
                <footer></footer>
            </body>
        </html>
    );
}
