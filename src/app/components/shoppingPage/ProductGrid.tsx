'use client'

import { FC, useEffect, useState } from "react"
import ProductItems from "./ProductItems"
import { usePathname } from "next/navigation"

interface ProductGridProps {
    products: Array<any>
    handleDeleteItem: any
}

type productToCartInfo = {
    id: string,
    title: string,
    price: string,
    amount: number
}

const ProductGrid: FC<ProductGridProps> = ({ products, handleDeleteItem }) => {
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
            // Assuming products have all necessary product details
            const product = products.find(m => m.id === ProductsDetailsSlug);
            if (product) {
                updatedCartItems.push({
                    id: product.id,
                    title: product.name,
                    price: product.price,
                    amount: amount,
                });
            }
        }

        setProductToSessionInfo(updatedCartItems)
    }
    return (
        <ul className="mb-10 w-11/12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {products.map((product) =>
                <li key={product.id}>
                    <ProductItems
                        title={product.name}
                        simpleDescription={product.simple_description}
                        price={product.price}
                        classSlug={pathName}
                        ProductsDetailsSlug={product.id}
                        itemAmount={productToSessionInfo.find(item => item.id === product.id)?.amount || 0}
                        updateCartItem={updateProductToSession}
                        image_one={product.image_path_one}
                        image_two={product.image_path_two}
                        handleDeleteItem={handleDeleteItem}
                    />
                </li>
            )}
        </ul>
    )
}

export default ProductGrid