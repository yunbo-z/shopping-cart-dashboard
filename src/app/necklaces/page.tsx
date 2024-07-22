import ProductGrid from "../components/shoppingPage/ProductGrid"
import ProductsIntro from "../components/shoppingPage/ProductsIntro"
import { GetNecklaces } from "@/lib/helper"

const NecklacesPage = async () => {
    const products = await GetNecklaces()

    return (
        <div className="flex flex-col justify-center items-center">
            <ProductsIntro
                title="Neckline Elegance Special"
                content="Browse our elegant range of necklaces, crafted in France from sustainable materials. Our collection features a variety of styles, from sophisticated chains to statement pieces, each designed to enhance any ensemble."
            />
            <ProductGrid products={products}></ProductGrid>
        </div>
    )
}
export default NecklacesPage