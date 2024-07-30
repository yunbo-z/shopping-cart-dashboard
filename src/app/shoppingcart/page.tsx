import ShoppingCartForm from "../components/shoppingCart/ShoppingCartForm"
import PaymentForm from "../components/shoppingCart/PaymentForm"
import { GetProductById } from "@/lib/helper"

const ShoppingCart = async() => {
    async function getProductInfoById (id:string) {
        'use server'
        return await GetProductById(id)
    }
    return (
        <div className="mx-7">
            <div className="border-b-4 border-red-300 py-4">
                <div className="text-base md:text-2xl flex justify-center">Your Bag</div>
            </div>
            <div className="grid grid-cols-7 xl:grid-cols-10 my-4">
                <div className="col-span-7"><ShoppingCartForm getProductInfoById={getProductInfoById}></ShoppingCartForm></div>
                <div className="col-span-7 mt-4 xl:col-span-3"><PaymentForm></PaymentForm></div>
            </div>
        </div>
    )
}
export default ShoppingCart