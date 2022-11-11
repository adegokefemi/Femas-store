const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/User");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/Product");
const cartRoute = require("./routes/Cart");
const orderRoute = require("./routes/Order");
const cors = require("cors");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
)
.then(() => console.log("DB Connection Succesful"))
.catch((err) => {
    console.log(err);
});

// To pass json file from postman.
app.use(express.json());

// this is used to solved the cors port issue.
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/Carts", cartRoute);
app.use("/api/order", orderRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is up and running!");
});