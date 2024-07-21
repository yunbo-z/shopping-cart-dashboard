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
    pool.query('SELECT * FROM products ORDER BY id ASC', (err, results) => {
        if (err) {
            throw err
        }
        console.log("🚀 ~ pool.query ~ results.rowsggg:", results.rows)
        res.status(200).json(results.rows)
    })
}
const getProductById = (req, res) => {
    const _id = req.params.id
    console.log("🚀 ~ getProductById ~ _id:", _id);
    pool.query(`SELECT * FROM products WHERE id='${_id}'`, (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const CreateProducts = (req, res) => {
    const {
        id,
        category,
        image_path_one,
        image_path_two,
        image_path_three,
        status,
        name,
        simple_description,
        detailed_description,
        color,
        price,
        stock,
        created_at,
        modified_at
    } = req.body;

    const query = `
        INSERT INTO products (
            id, category, image_path_one, image_path_two, image_path_three, status, name, simple_description, detailed_description, color, price, stock, created_at, modified_at
        ) VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14
        ) RETURNING id
    `;

    const values = [
        id,
        category,
        image_path_one,
        image_path_two,
        image_path_three,
        status,
        name,
        simple_description,
        detailed_description,
        color,
        price,
        stock,
        created_at,
        modified_at
    ];

    pool.query(query, values, (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).send("An error occurred!");
        } else {
            res.status(201).send(`Product added with ID ${result.rows[0].id}`);
        }
    });
}


module.exports = { getProducts, CreateProducts, getProductById }


//  {
//     "id": "klsjdoqsijdyb",
//     "category": "earring",
//     "image_path_one": "Necklace-01-1.png",
//     "image_path_two": "Necklace-01-2.png",
//     "image_path_three": "Necklace-01-3.png",
//     "status": "test",
//     "name":"Golden Blossom Pendant Necklace",
//     "simple_description": "A charming flower pendant necklace in gold, perfect for adding a touch of elegance to any outfit.",
//     "detailed_description": "The Golden Blossom Pendant Necklace captivates with its delicate flower design, featuring petal-shaped insets filled with a translucent, creamy enamel that captures the light beautifully. Crafted in high-quality gold-tone metal, this piece is centered with a sparkling gemstone, adding a hint of glamour. Its lightweight construction ensures comfort, while the adjustable chain allows for a customized fit. Whether dressed up or down, this necklace is a versatile addition to any jewelry collection.",
//     "color": " Gold with Cream Accents",
//     "price": "200",
//     "stock": "3",
//     "created_at": "2024-07-21T12:08:06.598Z",
//     "modified_at": "2024-07-21T12:08:06.598Z"
// }