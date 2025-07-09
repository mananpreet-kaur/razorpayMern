
import express from"express";
import cors from "cors";
import paymentRoute from './routes/paymentRoute.js';


export const app= express();
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies
app.use(cors);
app.use("/api",paymentRoute);