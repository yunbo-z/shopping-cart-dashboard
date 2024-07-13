const Pool = require('pg-pool')
const dotnev = require('dotenv')
dotnev.config()

const pool = new Pool({
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
})
const getProducts = (req, res) => {
    pool.query('SELECT * FROM public.productinfo ORDER BY id ASC', (err, results) => {
        if (err) {
            throw err
        }
        console.log("🚀 ~ pool.query ~ results.rowsggg:", results.rows)
        res.status(200).json(results.rows)
    })
}
const getProductById = (req, res) => {
    const _id = req.params.id
    pool.query(`SELECT * FROM public.productinfo WHERE id=${_id}`, (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const CreateProducts = (req, res) => {
    const { image, title, functionintro, price } = req.body
    pool.query('INSERT INTO productinfo (image, title, functionintro, price) VALUES ($1, $2, $3, $4)', [image, title, functionintro, price], (err, result) => {
        if (err) {
            res.status(500).send("An error occurred!")
        }
        res.status(201).send(`Product added with ID ${result.insertId}`)
    })
}

module.exports = { getProducts, CreateProducts, getProductById }