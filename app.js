const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config()

const app = express();

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const plantRoutes = require('./routes/plant');
const authRoutes = require('./routes/auth');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(cors({
    origin: process.env.CLIENT_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.get('/', (req, res) => {
    res.send('Server started');
});

app.use(userRoutes);
app.use(productRoutes);
app.use(plantRoutes);
app.use(authRoutes);


app.use('/', (req, res) => {
    res.send('404 page not found!');
});

module.exports = app;