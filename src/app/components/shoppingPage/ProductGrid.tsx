'use client'

import { FC, useEffect, useState } from "react"
import ProductItems from "./ProductItems"
import { usePathname } from "next/navigation"

interface ProductGridProps {
    meals: Array<any>
}

type productToCartInfo = {
    id: string,
    title: string,
    price: string,
    amount: number
}

const ProductGrid: FC<ProductGridProps> = ({ meals }) => {
    const pathName = usePathname()

    const [productToSessionInfo, setProductToSessionInfo] = useState<productToCartInfo[]>(() => {
        const savedCartInfo = sessionStorage.getItem('productToCartInfo');
        return savedCartInfo ? JSON.parse(savedCartInfo) : []
    })

    useEffect(() => {
        sessionStorage.setItem('productToCartInfo', JSON.stringify(productToSessionInfo));
    }, [productToSessionInfo]);

    const updateProductToSession = (ProductsDetailsSlug: string, amount: number) => {
        const updatedCartItems = [...productToSessionInfo]
        const repeatIdIndex = updatedCartItems.findIndex((item) => item.id == ProductsDetailsSlug)
        if (repeatIdIndex >= 0) {
            if (amount <= 0) {
                updatedCartItems.splice(repeatIdIndex, 1)
            }
            else {
                updatedCartItems[repeatIdIndex].amount = amount
            }
        } else if (amount > 0) {
            // Assuming meals have all necessary product details
            const meal = meals.find(m => m.id === ProductsDetailsSlug);
            if (meal) {
                updatedCartItems.push({ id: meal.id, title: meal.title, price: meal.price, amount: amount });
            }
        }

        setProductToSessionInfo(updatedCartItems)
    }
    return (
        <ul className="mb-10 w-11/12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {meals.map((meal) =>
                <li key={meal.id}>
                    <ProductItems
                        title={meal.title}
                        functionIntro={meal.functionintro}
                        price={meal.price}
                        classSlug={pathName}
                        ProductsDetailsSlug={meal.id}
                        itemAmount={productToSessionInfo.find(item => item.id === meal.id)?.amount || 0}
                        updateCartItem={updateProductToSession} />
                </li>
            )}
        </ul>
    )
}

export default ProductGrid