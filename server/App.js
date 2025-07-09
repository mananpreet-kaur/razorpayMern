
import express from"express";
// import { config } from 'dotenv';
import paymentRoute from './routes/paymentRoute.js';
// config({path:"./config/config.env"});

export const app= express();
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies

app.use("/api",paymentRoute);