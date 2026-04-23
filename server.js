const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
connectDB();
const app = express();
const BookRoutes = require('./routes/BookRoute');
const UserRoutes = require('./routes/UserRoute');
app.use(express.json());
app.use('/books', BookRoutes);
app.use('/users', UserRoutes);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});