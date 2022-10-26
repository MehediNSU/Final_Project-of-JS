const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const orderRouter = require('./routes/orderRoutes');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8000;

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

app.get('/', (req, res) => {
    res.send('Node.js part for the Full Stack Project by Mehedi');
});

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server started on port no. ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
