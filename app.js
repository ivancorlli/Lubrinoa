require("dotenv").config();
const express = require("express");
const cors = require('cors');
const path = require("path");



// Variables
const app = express();
const userRouter = require('./router/userRouter');
const categoryRouter = require('./router/categoryRouter');
const productRouter = require('./router/productRouter');
const clientRouter = require('./router/clientRouter');
const vehicleRouter = require('./router/vehicleRouter');


// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'));
}


// Rutas

app.use('/api',[
    userRouter,
    categoryRouter,
    productRouter,
    clientRouter,
    vehicleRouter,
])

app.get("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
module.exports = app