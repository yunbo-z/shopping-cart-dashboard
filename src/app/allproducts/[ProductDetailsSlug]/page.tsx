import { GetProductById } from "@/lib/helper"
import CounterButton from "@/app/components/buttons/CounterButton"
import ImageSlider from "@/app/components/ImageSlider"
import ProductDetailImg from "@/img/ProductDetailImg"

async function ProductsDetails({ params }: { params: { ProductDetailsSlug: string } }) {
    const getInfo = await GetProductById(params.ProductDetailsSlug)
    const info = getInfo[0]
    const id = info.id
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-7 lg:gap-12 mx-10 mt-8">
            <div className="col-span-3">
                {ProductDetailImg.map((item) => (
                    <ImageSlider src1={item.src1} src2={item.src2} src3={item.src3}></ImageSlider>
                ))}
            </div>
            <div className="col-span-2">
                <div className="text-2xl lg:text-3xl">{info.title}</div>
                <div className="text-xl text-gray-600 font-bold my-3">{info.price}€</div>
                <div className="my-3"><CounterButton id={info.id} title={info.title} price={info.price}></CounterButton></div>
                <div className="flex flex-col gap-2 my-5">
                    <div className="text-l text-justify"><b>{info.functionintro}:</b> elegant, timeless, sophisticated, sparkling, cushion-cut, halo, brilliant round diamonds</div>
                    <p><b>Color Info:</b> silver, clear</p>
                    <p className="text-justify"> These earrings feature cushion-cut center stones surrounded by a halo of smaller, brilliant round diamonds, offering a classic and timeless design.</p>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetails