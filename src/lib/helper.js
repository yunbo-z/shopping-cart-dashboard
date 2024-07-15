import { nanoid } from 'nanoid'
import { error } from 'node:console'
import fs from 'node:fs'
import path from 'node:path'

const dotenv = require('dotenv')
dotenv.config()

const apiUrl = process.env.API_URL

export async function GetProducts() {
    const res = await fetch(`${apiUrl}/api/products/`, {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache'// Ensures the request is not fulfilled from cache
        }
    })
    if (!res.ok) {
        throw new Error('Failed to fetch news')
    }

    const products = await res.json()
    return products
}

export async function GetProductById(id) {
    const res = await fetch(`${apiUrl}/api/product/${id}`, {
        method: 'GET',
        headers: {
        }
    })
    if (!res.ok) {
        throw new Error('Failed to fetch news')
    }

    const products = await res.json()
    return products
}

export async function SaveNewProduct(AddNewProduct) {
    AddNewProduct.id = nanoid()
    AddNewProduct.create_at = new Date().toISOString()
    async function processImage(image, suffix) {
        const extension = image.name.replace(/\s+/g, '').split('.').pop();
        const fileName = `${AddNewProduct.name.replace(/\s+/g, '')}_${suffix}.${extension}`;
        const filePath = path.join('public', 'images', AddNewProduct.category, fileName);
        console.log("🚀 ~ processImage ~ filePath:", filePath)

        // Create a write stream for the file
        const stream = fs.createWriteStream(filePath);
        const bufferedImage = await image.arrayBuffer()

        stream.write(Buffer.from(bufferedImage), (error) => {
            if (error) {
                throw new Error('Saving image failed!')
            }
        })
        image = `/images/${fileName}`
    }

    // Process each image
    processImage(AddNewProduct.image_one, 'one');
    processImage(AddNewProduct.image_two, 'two');
    processImage(AddNewProduct.image_three, 'three');

}
