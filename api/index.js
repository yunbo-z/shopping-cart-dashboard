const express = require('express')
const router = new express.Router()
const app = express()
const db = require('./queries')
const multer = require('multer')
const dotenv = require('dotenv')
dotenv.config()

const port = 8000
const api_host_url = process.env.API_HOST_URL
console.log("🚀 ~ api_host_url:", api_host_url)
const api_host= `${api_host_url}${port}`

app.use(express.json())

app.get('/api', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/api/products/', db.getProducts)
app.get('/api/product/earrings', db.GetEarrings)
app.get('/api/product/necklaces', db.GetNecklaces)
app.get('/api/product/bracelets', db.GetBracelets)
app.get('/api/product/:id', db.getProductById)
app.post('/api/products', db.CreateProducts)
app.delete('/api/product/:id', db.deleteProductById)

app.listen(port, () => {
    console.log(api_host)
    console.log(`App is running on the port ${port}`)
})