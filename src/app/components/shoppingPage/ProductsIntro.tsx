import { FC } from "react"

interface ProductsIntroProps {
    title:string,
    content: string
}

const ProductsIntro: FC<ProductsIntroProps> = ({title, content}) => {
    return (
        <div className="py-12 flex flex-col w-full">
            <div className="text-xl md:text-2xl font-bold text-center">{title}</div>
            <div className="text:base md:text-xl text-center mx-16 md:mx-24">
                {content}
            </div>
        </div>
    )
}
export default ProductsIntro