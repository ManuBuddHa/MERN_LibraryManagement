const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');
connectDB();
const BookRoutes = require('./routes/BookRoute');
const UserRoutes = require('./routes/UserRoute');
const cors = require('cors')
app.use(express.json());
app.use('/books', BookRoutes);
app.use('/users', UserRoutes);
app.use(cors(
    {
        origin:"http://localhost:5173/"
    }
))
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});