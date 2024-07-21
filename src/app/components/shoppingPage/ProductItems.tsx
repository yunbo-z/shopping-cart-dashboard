'use client'
import Image from "next/image"
import Link from "next/link"
import earringOne from "@/img/Earring-01-1.jpg"
import earringTwo from "@/img/Earring-01-3.jpg"
import { FC, useState } from "react"

interface ProductItemsProps {
    title: string,
    simpleDescription: string,
    price: string,
    classSlug:string,
    ProductsDetailsSlug: string,
    itemAmount: number,
    updateCartItem: any
}


const ProductItems: FC<ProductItemsProps> = ({ title, simpleDescription, price, classSlug, ProductsDetailsSlug, itemAmount, updateCartItem }) => {

    const [isHover, setIsHover] = useState(false)
    const handleMouseHover = () => {
        setIsHover(!isHover)
    }
    const handleAddItemAmount = () => {
        updateCartItem(ProductsDetailsSlug, itemAmount + 1)
        // sessionStorage.removeItem('productToCartInfo')
    }
    const handleReduceItemAmount = () => {
        updateCartItem(ProductsDetailsSlug, itemAmount - 1)
    }
    return (
        <article className="flex flex-col justify-between h-full">
            <header>
                <div className="h-72 relative">
                    <Link href={`${classSlug}/${ProductsDetailsSlug}`}><Image onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover} sizes="100vw" className="object-cover cursor-pointer max-w-fit place-self-center" alt="product picture" src={isHover ? earringTwo : earringOne} fill /></Link>
                </div>
                <div className="">
                    <p className="text-base md:text-xl font-bold text-center mt-4">{title}</p>
                    <p className="text-sm md:text-base text-center">{simpleDescription}</p>
                    <p className="text-sm md:text-base font-semibold text-center">{price}€</p>
                </div>
            </header>
            <div className="my-2 md:my-6 flex justify-center items-center">
                {itemAmount > 0
                    ?
                    <div className="flex flex-row items-center">
                        <button onClick={handleReduceItemAmount} className="text-sm md:text-base bg-red-300 px-2.5 rounded-md">-</button>
                        <p className="px-2">{itemAmount}</p>
                        <button onClick={handleAddItemAmount} className="text-sm md:text-base bg-red-300 px-2.5 rounded-md">+</button>
                    </div>
                    :
                    <button className="text-sm md:text-base" onClick={handleAddItemAmount}>Add to Cart &rarr;</button>}
            </div>
        </article>
    )
}

export default ProductItems