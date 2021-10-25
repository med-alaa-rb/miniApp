const express = require("express");
const app = express();
const { dbRouter } = require("./routers/dbRouter");
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/", dbRouter);

var port = process.env.PORT || 2700;

app.listen(port, () =>
  console.log(`app is listnening to http://localhost:${port}/`)
);
