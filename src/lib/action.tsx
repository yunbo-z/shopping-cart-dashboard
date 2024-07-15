'use server'

import { SaveNewProduct } from "./helper"

export async function AddProductAction (formData: { get: (arg0: string) => any }) {
        
    const AddNewProduct = {
        name: formData.get('name'),
        price: formData.get('price'),
        stock: formData.get('stock'),
        category: formData.get('category'),
        color: formData.get('color'),
        description: formData.get('description'),
        image_one: formData.get('image_one'),
        image_two: formData.get('image_two'),
        image_three: formData.get('image_three')
    }
    SaveNewProduct(AddNewProduct)
    console.log("🚀 ~ AddProductAction ~ AddNewProduct:", AddNewProduct)
}