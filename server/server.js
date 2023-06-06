import express from "express";
import cors from "cors";
require("express-async-errors");

import prisma from "./prisma/prisma";
import router from "./router";
import errorHandlerMiddleware from "./middlewares/errorHandler";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandlerMiddleware);

async function checkDBConnection() {
  try {
    await prisma.$connect();
    app.listen(PORT, () => {
      console.log(`App running at port ${PORT}`);
    });
  } catch (err) {
    console.log("DB is not connected!!!");
    process.exit(1);
  }
}

checkDBConnection();
