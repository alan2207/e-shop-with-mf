import express from "express";
import {
  db,
  getCartAndProducts,
  getProduct,
  getProducts,
  updateCart,
} from "./db";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
      "http://localhost:3003",
    ],
  })
);
app.use(cookieParser());
app.use(bodyParser({}));
const port = 8080;

app.get("/products", async (req, res) => {
  const products = await getProducts();
  res.json(products);
});

app.get("/products/:id", async (req, res) => {
  const product = await getProduct(+req.params.id);
  res.json(product);
});

app.get("/cart", async (req, res) => {
  const anonymousId = req.cookies["anonymousid"] as string;
  const data = await getCartAndProducts(anonymousId);
  res.json(data);
});

app.post("/cart", async (req, res) => {
  const anonymousId = req.cookies["anonymousid"] as string;
  if (!anonymousId) {
    res
      .status(400)
      .json({ success: false, message: "anonymousId is required" });
    return;
  }
  await updateCart(anonymousId, req.body.productId, req.body.quantity);
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}!!`);
});
