import dotenv from 'dotenv'; 
dotenv.config({path:"./config/config.env"});

import { app } from "./App.js";

app.listen(process.env.PORT, () =>
  console.log(`Server is working on ${process.env.PORT}`)
);
