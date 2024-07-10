import express from "express";
import mongoose from "mongoose";
import { PORT, URL } from "./config.js";
import { Book } from "./models/book.js";
import { router } from "./routes/book.js";

const app = express();

mongoose.connect(URL)
    .then(() => console.log("MongoDB connected"))
    .catch(() => console.log("Error!"));

app.use(express.urlencoded({extended:false}));
app.use('/books', router);

app.listen(PORT, () => console.log('Server Connected to port', PORT));