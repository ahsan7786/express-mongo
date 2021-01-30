var express = require("express");
const productRouter = require("./routes/product");
var server = express();

server.use("/products", productRouter);
var port = process.env.PORT || 5000;
server.listen(port, () => {
  //when server is ready start add data in mongodb
});
