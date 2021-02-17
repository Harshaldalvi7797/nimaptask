require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const categoryRoutes = require("./routes/category")
const productRoutes = require("./Routes/product")
const pagination = require("./Routes/pagination")
const mongoose = require("mongoose");
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch(err => {
        console.log(err);
    });

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser()); // add and remove some values in cookies
app.use(cors());

app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", pagination);
//Port
const port = process.env.PORT || 5000;
//starting server
app.listen(port, () => {
    console.log(`app is running ${port}`);
});