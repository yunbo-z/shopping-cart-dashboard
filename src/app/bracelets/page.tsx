import ProductGrid from "../components/shoppingPage/ProductGrid"
import ProductsIntro from "../components/shoppingPage/ProductsIntro"
import { DeleteProductById, GetBracelets } from "@/lib/helper"

const BraceletsPage = async () => {
    const products = await GetBracelets()
    const handleDeleteItem = async (id: any) => {
        'use server'
        await DeleteProductById(id)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <ProductsIntro
                title="Wrist Artistry Special"
                content="Our bracelets are designed to impress and inspire. Each bracelet is made in France, focusing on sustainable practices. Explore our collection for pieces that combine durability with luxury, suitable for all occasions."
            />
            <ProductGrid products={products} handleDeleteItem={handleDeleteItem}></ProductGrid>
        </div>
    )
}
export default BraceletsPage