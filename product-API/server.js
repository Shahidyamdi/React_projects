var express = require("express");
var app = express();
var productAPI = require("./controller/product.controller");
app.use("/api/products",productAPI)
app.listen(8080);
console.log("Server up and running")