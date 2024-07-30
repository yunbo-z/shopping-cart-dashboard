'use client'

import { useEffect, useState } from "react"
import ShoppingCartItemBlock from "./ShoppingCartItemBlock"

const ShoppingCartForm = ({getProductInfoById}: any) => {
    const [productInfoFromStorage, setProductInfoFromStorage] = useState('')
    useEffect(() => {
        // productInfoFromStorage is an array of objects
        const productInfoFromStorage = sessionStorage.getItem('productToCartInfo')
        setProductInfoFromStorage(productInfoFromStorage ? productInfoFromStorage : '')
    }, [])

    const updateProductToSession = (ProductsDetailsSlug: string, amount: number) => {
        const projectInfoObject = JSON.parse(productInfoFromStorage)
        const updatedCartItems = [...projectInfoObject]
        const repeatIdIndex = updatedCartItems.findIndex((item) => item.id == ProductsDetailsSlug)
        if (repeatIdIndex >= 0) {
            if (amount <= 0) {
                updatedCartItems.splice(repeatIdIndex, 1)
            }
            else {
                updatedCartItems[repeatIdIndex].amount = amount
            }
        }
        setProductInfoFromStorage(JSON.stringify(updatedCartItems))
        sessionStorage.setItem('productToCartInfo', productInfoFromStorage);

    }

    const removeProductFromSession = (ProductsDetailsSlug: string) => {
        const projectInfoObject = JSON.parse(productInfoFromStorage)
        const updatedCartItems = [...projectInfoObject]
        const repeatIdIndex = updatedCartItems.findIndex((item) => item.id == ProductsDetailsSlug)
        if (repeatIdIndex >= 0) {
            updatedCartItems.splice(repeatIdIndex, 1)
        }
        setProductInfoFromStorage(JSON.stringify(updatedCartItems))
        sessionStorage.setItem('productToCartInfo', JSON.parse(productInfoFromStorage).length - 1 > 0 ? productInfoFromStorage : '');
    }

    if (productInfoFromStorage == '') {
        return <>There is nothing</>
    } else {
        const newProjectInfoObj = JSON.parse(productInfoFromStorage)
        return (
            <div>
                <div className="pr-5">
                    {newProjectInfoObj.map((product: { id: any; title: any; price: any; amount: any }) => (
                        <ShoppingCartItemBlock
                            productsName={product.title}
                            unitPrice={product.price}
                            addedItemAmount={product.amount}
                            productsId={product.id}
                            handleUpdateAmount={updateProductToSession}
                            handleRemoveProduct={removeProductFromSession}
                            getProductInfoById={getProductInfoById}
                        ></ShoppingCartItemBlock>
                    ))}
                </div>
            </div>
        )
    }
}
export default ShoppingCartForm