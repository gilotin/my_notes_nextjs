import Link from "next/link";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export default function Navigation() {
    return (
        <>
            <nav>
                <ul role="list">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
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
        </>
    );
}
