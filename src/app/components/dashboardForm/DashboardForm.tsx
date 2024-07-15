import ImagePicker from '@/app/components/dashboardForm/ImagePicker';
import { AddProductAction } from '@/lib/action';
import { FC } from 'react';

interface NumberSelctionProps {
    name: string,
    number: number
}

export const NumberSelction: FC<NumberSelctionProps> = ({ name, number }) => {
    const options = []
    for (let i = 1; i <= number; i++) {
        options.push(<option key={i} value={i}>{i}</option>)
    }
    return (
        <select name={name} id={name} className="bg-gray-200 w-full rounded-md border-0 py-1 pl-7 pr-20 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
            {options}
        </select>
    )
}


export default function DashboardForm() {

    return (
        <>
            <header className="">
                <p className="text-xl mb-3">Add Products</p>
            </header>
            <main className="">
                {/* this form take a Server Action */}
                <form action={AddProductAction}>
                    <div className="flex flex-col gap-3">
                        <div>
                            <p className="flex items-end gap-2">
                                <label className="text-xl" htmlFor="name">Name: </label>
                                <input className="block w-full rounded-md border-0 py-1 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                />
                            </p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <p className="flex items-end gap-2">
                                <label className="text-xl" htmlFor="price">Price: </label>
                                <input className="block w-full rounded-md border-0 py-1 pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    type="number"
                                    min="1"
                                    max="10"
                                    id="price"
                                    name="price"
                                    required
                                />
                            </p>
                            <p className="flex items-end gap-2">
                                <label className="text-xl" htmlFor="stock">Stock: </label>
                                <NumberSelction name="stock" number={10} />
                            </p>
                        </div>
                        <p className="flex items-end gap-2">
                            <label className="text-xl" htmlFor="category">Category: </label>
                            <select id="category" name="category" className="bg-gray-200 w-full rounded-md border-0 py-1 pl-7 pr-20">
                                <option value="earring">earring</option>
                                <option value="necklace">necklace</option>
                                <option value="bracelet">bracelet</option>
                            </select>
                        </p>
                        <p className="flex items-end gap-2">
                            <label className="text-xl flex-shrink-0" htmlFor="color">Color Introduction: </label>
                            <input className="block w-full rounded-md border-0 py-1 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                type="text"
                                id="color"
                                name="color"
                                required
                            />
                        </p>
                        <p className="flex flex-col items-start gap-2">
                            <label className="text-xl" htmlFor="description">Description: </label>
                            <textarea
                                className="block w-full rounded-md border-0 py-1 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300"
                                id="description"
                                name="description"
                                required
                            ></textarea>
                        </p>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <ImagePicker label="Image One" name="image_one" />
                        <ImagePicker label="Image Two" name="image_two" />
                        <ImagePicker label="Image Three" name="image_three" />
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className="bg-red-200 px-4 py-2" type="submit">Create a New Product</button>
                    </div>
                </form>
            </main>
        </>
    );
}