import ProductGrid from "../components/shoppingPage/ProductGrid"
import ProductsIntro from "../components/shoppingPage/ProductsIntro"
import { GetProducts } from "@/lib/helper"

export default async function ShopPage() {
    const products = await GetProducts()

    return (
        <div className="flex flex-col justify-center items-center">
            <ProductsIntro
                title="Jewellery Showcase"
                content="Explore our complete collection of rings, bracelets, earrings, chains, and necklaces. Each piece is crafted with care in France and designed with sustainability in mind, embodying timeless elegance and environmental consciousness."
            />
            <ProductGrid products={products}></ProductGrid>
        </div>
    )
}