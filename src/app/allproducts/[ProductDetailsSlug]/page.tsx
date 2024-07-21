import { GetProductById } from "@/lib/helper"
import CounterButton from "@/app/components/buttons/CounterButton"
import ImageSlider from "@/app/components/ImageSlider"
import ProductDetailImg from "@/img/ProductDetailImg"

async function ProductsDetails({ params }: { params: { ProductDetailsSlug: string } }) {
    const getInfo = await GetProductById(params.ProductDetailsSlug)
    const info = getInfo[0]
    const id = info.id
    return (
        <div className="grid grid-cols-1 md:grid-cols-7 gap-7 lg:gap-12 mx-10 mt-8 2xl:mx-28">
            <div className="col-span-1 md:col-span-4">
                {ProductDetailImg.map((item) => (
                    <ImageSlider src1={item.src1} src2={item.src2} src3={item.src3}></ImageSlider>
                ))}
            </div>
            <div className="col-span-1 md:col-span-3">
                <div className="text-2xl lg:text-3xl">{info.name}</div>
                <div className="text-xl text-gray-600 font-bold my-3">{info.price}€</div>
                <div className="my-3"><CounterButton id={info.id} title={info.name} price={info.price}></CounterButton></div>
                <div className="flex flex-col gap-2 my-5">
                    <div className="text-l text-justify mt-2"><b>Description: </b>{info.simple_description}</div>
                    <p className="mt-2"><b>Color Info: </b>{info.color}</p>
                    <p className="text-justify mt-2">{info.detailed_description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetails