const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
require("./src/config/db");
const cors = require("cors");
const port = process.env.PORT;
const router = require("./src/router/routers");

app.use(cors());
app.use(bodyParser.json());
app.use("/", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
