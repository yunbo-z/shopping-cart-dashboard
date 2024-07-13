import Link from "next/link";
import NavLink from "./NavLink"
import { NavLinkMoble } from "./NavLinkMobile";
import TopBar from "./TopBar";
import LangSelector from "./LangSelector";

export const MainHeader = () => {

    return (
        <div>
            <div className="grid grid-cols-3 px-4 py-7 items-center md:py-10 md:px-12">
                {/* Mobile Navigation */}
                <NavLinkMoble />
                <LangSelector />
                <Link href="/"><div className="justify-self-center"><p className="text-sm sm:text-base md:text-xl font-bold text-center">JEWELRY YOUNG</p></div></Link>
                <TopBar />
            </div>
            {/* Desktop Navigation */}
            <NavLink />
        </div>
    )
}