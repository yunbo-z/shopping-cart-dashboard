'use client'
import { useState } from "react";
import Image from "next/image";

const ImageSlider = ({ src1, src2, src3 }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const images = [src1, src2, src3]

    const slidePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const slideNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    return (
        <div className="relative h-96 overflow-hidden">
            <button onClick={slidePrev} className="hover:cursor-pointer hover:animate-pulse rounded-full absolute left-3 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-red-200/65">
                <svg t="1720277669809" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2879" width="24" height="24"><path d="M742.832 943.52a25.6 25.6 0 0 1-36.864 35.52L279.296 535.28a25.6 25.6 0 0 1 0-35.504L705.968 56.064a25.6 25.6 0 0 1 36.864 35.488l-409.6 425.984 409.6 425.984z" fill="#ffffff" p-id="2880"></path></svg>
            </button>
            <button onClick={slideNext} className="hover:cursor-pointer hover:animate-pulse rounded-full absolute right-3 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-red-200/65">
                <svg t="1720169945041" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2485" width="24" height="24"><path d="M278.784 943.52a25.6 25.6 0 0 0 36.864 35.52l426.672-443.744a25.6 25.6 0 0 0 0-35.504L315.648 56.064a25.6 25.6 0 0 0-36.864 35.488l409.6 425.984-409.6 425.984z" fill="#FFFFFF" p-id="2486"></path></svg>
            </button>
            {images.map((src, index) => (
                <div key={index} className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
                    <Image priority className="object-contain w-full h-full" src={src} alt={`Image ${index + 1}`} sizes="100vw" fill />
                </div>
            ))}
        </div>
    )
}
export default ImageSlider