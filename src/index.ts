import express from "express";
import { CentreCivicUserRouter } from "./routes/CentreCivicUserRoutes.js";
import { CentreCivicActivityRouter } from "./routes/CentreCivicActivityRoutes.js";
import { connectDB } from "./database/connect_db.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/appActivitats", CentreCivicUserRouter);
app.use("/appActivitats", CentreCivicActivityRouter);

app.get("/test", (req, res) => {
  res.json({ message: "Test route is working!" });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(2, 6));
