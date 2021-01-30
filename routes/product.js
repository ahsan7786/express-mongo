const express = require("express");
const _ = require("lodash");
const products = require("../data/products.json");
const { getProducts, getFilteredData } = require("../data/repo/productrepo");
const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  getProducts().then(function(products) {
    res.status = 200;
    return res.send(products);
  });
});

productRouter.get("/:title", async (req, res) => {
  const titleParam = req.params.title;
  console.log("title param is " + titleParam);
  return res.send(await getFilteredData({ title: titleParam }));
});

module.exports = productRouter;
