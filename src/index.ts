import express from "express";
import { CentreCivicRouter } from "./routes/CentreCivicRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", CentreCivicRouter);

app.get("/test", (req, res) => {
  res.json({ message: "Test route is working!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(2, 6));
