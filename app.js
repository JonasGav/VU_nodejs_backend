// app.js
/*const express = require("express");
const bodyParser = require("body-parser");
// Set up mongoose connection
const mongoose = require("mongoose");
const cors = require("cors");

const product = require("./routes/product.route"); // Imports routes for the products
// initialize our express app
const app = express();
app.use(cors());

let dev_db_url =
  "mongodb://johny:adminadmin1997@ds042417.mlab.com:42417/nodejslearning";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/products", product);
/*app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://loalhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,OPTIONS,PUT,PATCH,DELETE"
  );
});*/

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.listen(port, () => {
  console.log(
    "Server is up and running on port number " +
      port +
      ", link: http://localhost:3000/"
  );
});
