import ProductGrid from "../components/shoppingPage/ProductGrid"
import ProductsIntro from "../components/shoppingPage/ProductsIntro"
import { DeleteProductById, GetEarrings } from "@/lib/helper"

const EarringsPage = async () => {
    const products = await GetEarrings()
    const handleDeleteItem = async (id: any) => {
        'use server'
        await DeleteProductById(id)
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <ProductsIntro
                title="Ear Adornments Special"
                content="Discover our exquisite selection of earrings, each piece showcasing unique designs and meticulous craftsmanship. Made in France, our earrings emphasize sustainability, blending classic styles with modern sensibilities."
            />
            <ProductGrid products={products} handleDeleteItem={handleDeleteItem}></ProductGrid>
        </div>
    )
}
export default EarringsPage