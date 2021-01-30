const data = require("./data/products.json");
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dName = "products";

async function insertProducts() {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dName);
  const result = await db.collection("categories").insertMany(data);
  client.close();
  console.log(result);
}

insertProducts();
