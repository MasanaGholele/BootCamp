const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");


dotenv.config();

mongoose.
    connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successful"))
    .catch((err) => {
        console.log("error");
    });

// This is what you would use if no routes are defined
// app.get("/api/test", ()=>{
//     console.log("test is successful")
// })

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});