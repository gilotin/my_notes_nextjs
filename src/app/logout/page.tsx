"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default async function OnLogout() {
    const router = useRouter();
    try {
        const response = await fetch("/api/users/logout");
        if (response.ok) {
            console.log("Logout successful");
        }
    } catch (error: any) {
        console.log(error.message);
        toast.error(error.message);
    }
    router.push("/");
    return;
}
