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
