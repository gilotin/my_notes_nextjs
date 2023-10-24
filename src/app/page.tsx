import Link from "next/link";
import styles from "./page.module.css";
import Register from "./register/page";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <h1>Hello to main page!</h1>
            </main>
        </>
    );
}
