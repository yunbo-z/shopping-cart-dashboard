'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import React, { FC } from "react"
import navItems from "./navItems"

interface LinkItemsProps {
    href: string,
    children: React.ReactNode
}

const LinkItems: FC<LinkItemsProps> = ({ href, children }) => {
    const pathName = usePathname();
    return (
        <Link className={pathName == href ? "text-amber-900" : "text-black"} href={href}>{children}</Link>
    )
}

const NavLink = () => {
    return (
        <nav className="border-b-2 border-red-200">
            <ul className="hidden md:flex w-full gap-10 lg:gap-20 xl:gap-28 place-content-center mb-5">
                {navItems.map((item) => (
                    <li key={item.key}>
                        <LinkItems href={item.path}>{item.text}</LinkItems>
                    </li>
                ))}
            </ul>
        </nav>
    )
};
export default NavLink;