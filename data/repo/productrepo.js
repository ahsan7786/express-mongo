const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dName = "products";
// make single connection
const makeConnection = async () => {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dName);
  return db;
};
const getProducts = async () => {
  const db = await makeConnection();
  const products = await db
    .collection("categories")
    .find()
    .toArray();
  return products;
};

const getFilteredData = async (query) => {
  const db = await makeConnection();
  const projection = db.collection("categories").find(query);
  const products = await projection.toArray();
  return products;
};
module.exports = { getProducts, getFilteredData };
