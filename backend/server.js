require('dotenv').config()
const express = require('express');
const res = require('express/lib/response');
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
connectDB();

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json());

app.use('/api/products', productRoutes)

app.get('/', (req, res) => {
    res.send('<p>h1</p>')
})


app.listen(PORT, () => console.log('Server running on PORT:' + PORT))