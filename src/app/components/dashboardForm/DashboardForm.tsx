import ImagePicker from '@/app/components/dashboardForm/ImagePicker';
import { AddProductAction } from '@/lib/action';

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
                                <input className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" id="name" name="name" required />
                            </p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <p className="flex items-end gap-2">
                                <label className="text-xl" htmlFor="price">Price: </label>
                                <input className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" id="price" name="price" required />
                            </p>
                            <p className="flex items-end gap-2">
                                <label className="text-xl" htmlFor="stock">Stock: </label>
                                <input className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" id="stock" name="stock" required />
                            </p>
                        </div>
                        <p className="flex items-end gap-2">
                            <label className="text-xl" htmlFor="category">Category: </label>
                            <input className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" id="category" name="category" required />
                        </p>
                        <p className="flex items-end gap-2">
                            <label className="text-xl flex-shrink-0" htmlFor="color">Color Introduction: </label>
                            <input className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" id="color" name="color" required />
                        </p>
                        <p className="flex flex-col items-start gap-2">
                            <label className="text-xl" htmlFor="discription">Discription: </label>
                            <textarea
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300"
                                id="discription"
                                name="discription"
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