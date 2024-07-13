'use client'
import { FC, useEffect, useState } from "react"

interface CounterButtonProp {
    id: number,
    title: string,
    price: number
}

const CounterButton: FC<CounterButtonProp> = ({ id, title, price }) => {
    console.log("title: ",title)
    const [number, setNumber] = useState(0)
    useEffect(() => {
        // productInfoFromStorage is an array of objects
        const productInfoFromStorage = sessionStorage.getItem('productToCartInfo')
        if (productInfoFromStorage) {
            const projectInfoObject = JSON.parse(productInfoFromStorage)
            const storedObject = projectInfoObject.find((item: { id: number }) => item.id == id)
            if (storedObject && storedObject.amount) {
                setNumber(storedObject.amount)
            }
        }
    }, [id])

    // Update session storage when number changes
    useEffect(() => {
        const updateSessionStorage = () => {
            const productInfoFromStorage = sessionStorage.getItem('productToCartInfo');
            const products = productInfoFromStorage ? JSON.parse(productInfoFromStorage) : [];
            const productIndex = products.findIndex((product: any) => product.id === id);

            if (productIndex >= 0) {
                products[productIndex].amount = number;
            } else {
                products.push({ id, title, price, amount: number });
            }

            sessionStorage.setItem('productToCartInfo', JSON.stringify(products));
        };
        updateSessionStorage();
    }, [number, id]);

    const handleCountInc = () => {
        setNumber((number) => number + 1)
    }

    const handleCountDec = () => {
        setNumber((number) => number - 1)
    }
    if (number < 0) {
        setNumber(0)
    }
    return (
        <div>
            <div className="flex flex-row w-fit border-2 border-red-200">
                <button onClick={handleCountDec} className="text-xl px-3 flex items-center hover:bg-red-200">-</button>
                <div className="flex items-center text-m px-2 mx-1">{number}</div>
                <button onClick={handleCountInc} className="text-xl px-3 hover:bg-red-200">+</button>
            </div>
        </div>
    )
}

export default CounterButton