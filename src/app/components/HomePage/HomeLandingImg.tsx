import Image from "next/image";
import bgPoster from "@/img/bgmain_crop.jpg"
import Link from "next/link";

export const HomeLandingImg = () => {
    return (
        <div className="h-screen">
            <div className="relative w-full h-5/6">
                <Image className="object-cover" sizes="100vw" alt="homeimg" src={bgPoster} fill></Image>
                <div className="absolute bottom-20 md:bottom-12 inset-x-1/4 md:inset-x-1/3">
                    <div className="flex gap-8 justify-center">
                        <div className="border-solid border-2 border-black py-1 px-2 bg-black text-white text-sm md:text-xl"><Link href="/allproducts">EXPLORE PRODUCTS</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}