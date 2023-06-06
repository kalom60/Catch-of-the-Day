import express from "express";
import cors from "cors";

import prisma from "./prisma/prisma";

const app = express();
const PORT = 5000;

app.use(cors());

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
