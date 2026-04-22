const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
connectDB();
const app = express();
const routes = require('./routes/route');
app.use(express.json());
app.use('/books', routes);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});