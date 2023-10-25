"use client";

import { useRouter } from "next/navigation";

export default function UserProfile({ params }: any) {
    const router = useRouter();

    return (
        <>
            <h1>Settings Page</h1>
            <button onClick={router.back}>back</button>
        </>
    );
}
