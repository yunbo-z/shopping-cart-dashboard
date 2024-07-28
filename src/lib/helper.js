import { nanoid } from 'nanoid'
import fs from 'node:fs'
import path from 'node:path'

const dotenv = require('dotenv')
dotenv.config()

const apiUrl = process.env.API_URL

export async function GetProducts() {
    const res = await fetch(`${apiUrl}/api/products?t=${new Date().getTime()}`, {
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

export async function GetEarrings() {
    const res = await fetch(`${apiUrl}/api/product/earrings?t=${new Date().getTime()}`, {
        method: 'GET',
        headers: {
        }
    })
    if (!res.ok) {
        throw new Error('Failed to fetch news')
    }

    const getEarrings = await res.json()
    return getEarrings
}

export async function GetNecklaces() {
    const res = await fetch(`${apiUrl}/api/product/necklaces?t=${new Date().getTime()}`, {
        method: 'GET',
        headers: {
        }
    })
    if (!res.ok) {
        throw new Error('Failed to fetch news')
    }

    const getEarrings = await res.json()
    return getEarrings
}

export async function GetBracelets() {
    const res = await fetch(`${apiUrl}/api/product/bracelets?t=${new Date().getTime()}`, {
        method: 'GET',
        headers: {
        }
    })
    if (!res.ok) {
        throw new Error('Failed to fetch news')
    }

    const getEarrings = await res.json()
    return getEarrings
}

export async function GetProductById(id) {
    const res = await fetch(`${apiUrl}/api/product/${id}`, {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache'// Ensures the request is not fulfilled from cache
        }
    })
    if (!res.ok) {
        throw new Error('Failed to fetch news')
    }

    const product = await res.json()
    return product
}

export async function DeleteProductById(id) {
    const res = await fetch(`${apiUrl}/api/product/${id}`, {
        method: 'DELETE',
        headers: {
            'Cache-Control': 'no-cache'// Ensures the request is not fulfilled from cache
        }
    })
    if (!res.ok) {
        throw new Error('Failed to fetch news')
    }

    const deletedProducts = await res.json()
    return deletedProducts
}

export async function SaveNewProduct(AddNewProduct) {
    AddNewProduct.id = nanoid()
    AddNewProduct.created_at = new Date().toISOString()

    // Helper function to ensure the directory exists
    async function ensureDirectoryExists(dirPath) {
        try {
            await fs.promises.access(dirPath, fs.constants.F_OK);
        } catch (e) {
            console.log(`Directory not found, creating: ${dirPath}`);
            try {
                await fs.promises.mkdir(dirPath, { recursive: true });
                console.log(`Directory created: ${dirPath}`);
            } catch (mkdirErr) {
                console.error(`Error creating directory: ${mkdirErr}`);
                throw mkdirErr; // Re-throw to handle upstream
            }
        }
    }

    async function processImage(image, suffix) {
        const extension = image.name.replace(/\s+/g, '').split('.').pop();
        const fileName = `${AddNewProduct.name.replace(/\s+/g, '')}_${suffix}.${extension}`;
        const dirPath = path.join('public', 'images', AddNewProduct.category, AddNewProduct.name.replace(/\s+/g, ''));
        const filePath = path.join(dirPath, fileName);

        
        await ensureDirectoryExists(dirPath)
     
        // Create a write stream for the file
        const stream = fs.createWriteStream(filePath);
        const bufferedImage = await image.arrayBuffer()

        stream.write(Buffer.from(bufferedImage), (error) => {
            if (error) {
                throw new Error('Saving image failed!')
            }
        })
        return `/images/${AddNewProduct.category}/${AddNewProduct.name.replace(/\s+/g, '')}/${fileName}`
    }

    // Process all images concurrently
    const imagePaths = await Promise.all([
        processImage(AddNewProduct.image_one, 'one'),
        processImage(AddNewProduct.image_two, 'two'),
        processImage(AddNewProduct.image_three, 'three')
    ]);
    console.log("🚀 ~ SaveNewProduct ~ imagePaths:", imagePaths)
    AddNewProduct.image_one = imagePaths[0];
    AddNewProduct.image_two = imagePaths[1];
    AddNewProduct.image_three = imagePaths[2];

    const res = await fetch(`${apiUrl}/api/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body:JSON.stringify(AddNewProduct)
    })
    if (!res.ok) {
        console.log(res)
    }

    const products = await res.json()
    console.log("🚀 ~ SaveNewProduct ~ products:", products)
    return products
}
