import ProductGrid from "../components/shoppingPage/ProductGrid"
import ProductsIntro from "../components/shoppingPage/ProductsIntro"
import {GetProducts} from "@/lib/helper"

export default async function ShopPage(){
    const products = await GetProducts()

    return(
        <div className="flex flex-col justify-center items-center">
            <ProductsIntro />
            <ProductGrid products={products}></ProductGrid>
        </div>
    )
}