import storyImg from '@/img/story2.jpg'
import Image from 'next/image'

export const Introduction = () => {
    return (
        <main className="">
            <h1 className="text-center text-base md:text-3xl font-bold">Our Great Stories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 my-6 md:my-12">
                <div className='grid justify-items-center'>
                    <div className="relative w-60 h-60 md:w-80 md:h-80 overflow-hidden my-6 md:my-0">
                        <Image className='object-contain hover:scale-110 ease-in-out duration-700' alt='storyImg' src={storyImg} sizes="50vw" fill></Image>
                    </div>
                    <div className="text-sm md:text-base font-bold pb-2 md:py-4">STORY OF LA MÔME BIJOU</div>
                    <p className="w-60 md:w-80 text-sm md:text-base">La Môme Bijou: Playful luxury, Parisian style HISTOIRES FRANCAISES is delighted and proud to present a new jewellery brand. La Môme Bijou is the story of a French brand of luxury, playful costume j...</p>
                </div>
                <div className='grid justify-items-center'>
                    <div className="relative w-60 h-60 md:w-80 md:h-80 overflow-hidden my-6 md:my-0">
                        <Image className='object-contain hover:scale-110 ease-in-out duration-700' alt='storyImg' src={storyImg} sizes="50vw" fill></Image>
                    </div>
                    <div className="text-sm md:text-base font-bold pb-2 md:py-4">STORY OF LA MÔME BIJOU</div>
                    <p className="w-60 md:w-80 text-sm md:text-base">La Môme Bijou: Playful luxury, Parisian style HISTOIRES FRANCAISES is delighted and proud to present a new jewellery brand. La Môme Bijou is the story of a French brand of luxury, playful costume j...</p>
                </div>
            </div>
        </main>
    )
}