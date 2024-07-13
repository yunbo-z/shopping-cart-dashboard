'use client'
import Link from "next/link"
import { FC, useState } from "react"
import { usePathname } from "next/navigation"
import navItems from "./navItems"

export const NavLinkMoble = () => {
    const pathName = usePathname()
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className="flex md:hidden relative w-full place-content-start z-30">
            <div onClick={handleOpen} className="cursor-pointer">
                <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="910" width="24" height="24"><path d="M177.276121 259.545212a31.635394 31.635394 0 0 1 31.643152-31.635394h607.472485a31.635394 31.635394 0 0 1 0 63.278546H208.919273a31.635394 31.635394 0 0 1-31.643152-31.643152z m0 253.114182a31.635394 31.635394 0 0 1 31.643152-31.635394h607.472485a31.635394 31.635394 0 0 1 0 63.278545H208.919273a31.635394 31.635394 0 0 1-31.643152-31.643151z m0 253.114182a31.635394 31.635394 0 0 1 31.643152-31.635394h607.472485a31.635394 31.635394 0 0 1 0 63.270788H208.919273a31.635394 31.635394 0 0 1-31.643152-31.635394z" fill="#000000" p-id="911"></path></svg>
            </div>
            <div className={
                open
                    ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r bg-zinc-300 ease-in-out duration-500'
                    : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }>
                <ul className="relative flex flex-col p-20 gap-y-5">
                    {navItems.map((items) => (
                        <li key={items.key}>
                            <Link onClick={handleOpen} className={pathName == items.path ? "text-amber-900" : "text-black"} href={items.path}>{items.text}</Link>
                        </li>
                    ))}
                    <div onClick={handleOpen} className="absolute right-10 top-10 cursor-pointer">
                        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="832" width="24" height="24"><path d="M674.6112 305.9712l43.4176 43.4176L555.4176 512l162.6112 162.6112-43.4176 43.4176L512 555.4176l-162.6112 162.6112-43.4176-43.4176L468.5824 512 305.9712 349.3888l43.4176-43.4176L512 468.5824z" fill="#383838" p-id="833"></path></svg>
                    </div>
                </ul>
            </div>
        </div>

    )
}