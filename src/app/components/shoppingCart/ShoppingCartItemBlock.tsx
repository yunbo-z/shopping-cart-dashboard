'use client'

import Image from "next/image"
import img from "@/img/Earring-01-1.jpg"
import { FC, useEffect, useState } from "react"

interface ShoppingCartItemBlockProps {
    productsId: string,
    productsName: null | string,
    unitPrice: number,
    addedItemAmount: number,
    handleUpdateAmount: any,
    handleRemoveProduct: any
    getProductInfoById: any
}

const ShoppingCartItemBlock: FC<ShoppingCartItemBlockProps> = ({ productsId, productsName, unitPrice, addedItemAmount, handleUpdateAmount, handleRemoveProduct, getProductInfoById }) => {
    const [productImgPath, setProductImgPath] = useState('');
    useEffect(() => {
        if (productsId) {  // Ensure there's a valid productsId
            const fetchProductInfo = async () => {
                try {
                    const productInfo = await getProductInfoById(productsId);
                    const productImgPath = productInfo[0].image_path_one
                    setProductImgPath(productImgPath)
                } catch (error) {
                    console.error("Failed to fetch product info:", error);
                }
            };

            fetchProductInfo();
        }
    }, [productsId, getProductInfoById]);

    const [selectMenuItemAmount, setSelectMenuItemAmount] = useState(addedItemAmount)
    const options = []
    for (let i = 1; i <= 20; i++) {
        options.push(<option key={i} value={i}>{i}</option>)
    }

    const handleSelectMenuAmountChange = (e: any) => {
        setSelectMenuItemAmount(e.target.value)
    }
    const handleRemove = () => {
        handleRemoveProduct(productsId)
    }

    handleUpdateAmount(productsId, selectMenuItemAmount)

    return (
        <div className="mb-4 md:mb-6">
            <div className="flex justify-end">
                <button onClick={handleRemove}>
                    <svg
                        className="cursor-pointer"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="4219"
                        width="24"
                        height="24"
                    >
                        <path d="M286.165333 798.165333L512 572.330667l225.834667 225.834666 60.330666-60.330666L572.330667 512l225.834666-225.834667-60.330666-60.330666L512 451.669333 286.165333 225.834667 225.834667 286.165333 451.669333 512l-225.834666 225.834667z" fill="#f3b9b9" p-id="4220"></path>
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 ">
                <div className="grid col-span-1 h-24 md:h-44">
                    <div className="relative h-full w-full min-w-24 md:min-w-44 place-self-start">
                        <Image className="object-contain" alt="productImg" src={productImgPath} sizes="100vw" fill></Image>
                    </div>
                </div>
                <div className="grid-cols-1 xl:col-span-2 pl-7">
                    <div className="text-sm md:text-xl font-bold">{productsName}</div>
                    <div className="text-sm md:text-xl">{unitPrice}€</div>
                </div>
                <div className="col-span-1 grid justify-items-end md:justify-items-start">
                    <select
                        value={selectMenuItemAmount}
                        onChange={handleSelectMenuAmountChange}
                        className="py-1.5 rounded-md bg-red-100 w-14 h-10 md:w-20"
                        name="pieces"
                    >
                        {options}
                    </select>
                </div>
                <div className="text-sm md:text-xl md:col-span-1 md:justify-items-start grid col-span-3 justify-items-end font-bold">
                    Total Price: {selectMenuItemAmount * unitPrice}€
                </div>
            </div>
        </div>
    )
}
export default ShoppingCartItemBlock