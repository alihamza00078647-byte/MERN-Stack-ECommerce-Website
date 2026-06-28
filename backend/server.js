require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const connectCloudinary  = require('./config/cloudinary');
const { userRouter } = require('./Router/userRouter');
const { productRouter } = require('./Router/productRouter');


// App Config
const app = express();
const port = 3001;
connectCloudinary()

// Middleware
app.use(express.json());
app.use(cors());

// Api endpoint
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);


// app.use('/', (req, res, next) => {
//     res.send("Working");
// })





mongoose.connect(process.env.mongoURL).then(() => {
    console.log("Server Running...")
    app.listen(port, () => {
        console.log(`Server Running at http://localhost:${port}`);
    });
}).catch((err) => {
    console.log("Server Connecting Error", err);
})