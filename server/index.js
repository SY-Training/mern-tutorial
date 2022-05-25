// Newest version of JS allows to import modules rather than use const-require.
// Just need to add the "type" key-value in package.json.

// Also removed "test" from package.json and added start script for nodemon.
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import CONNECTION_URL from './Db_Access.js';
import postRoutes from './routes/post.js';

const app = express(); //This initialises the node app.

app.use('/posts', postRoutes) // This adds a prefix of '/posts' to all the routes.
    // Which means for each route in postRoutes, is accessed by www.mywebsite.com/posts OR localhost:5000/posts

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000; // Use the process port or 5000.

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) // The {} is not needed. Just removes warnings.
.then (() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))) // Error handling. 
.catch((error) => console.log(error.message));