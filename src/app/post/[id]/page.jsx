"use client";
import { usePathname } from "next/navigation";
export default function Post() {
    const pathname = usePathname();// usePathname returns the path of the current page
    //and is assigned to pathname which is then displayed
    return <p> {pathname}</p>;
}