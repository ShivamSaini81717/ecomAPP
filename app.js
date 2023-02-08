import express from "express";
import {config} from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";

config({
    path:"./data/config.env",
})

export const app =express();

// using middleware 
app.use(express.json())
app.use(cookieParser());


// import routers 
import user from "./routes/user.js"
import product from "./routes/product.js"
import order from "./routes/order.js"

app.use("/api/v1/user",user);
app.use("/api/v1/product",product);
app.use("/api/v1/order",order);


// using ErrorHandlerler
app.use(errorMiddleware);
