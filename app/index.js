require("dotenv").config();

const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const router = require("../config/routes");
// const path = require("path");
const app = express();
console.clear();

/** Install JSON request parser */
app.use(express.json());
app.use(cors());

/** Install request logger */
app.use(morgan("dev"));

app.use(router);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
  console.log(`Server on at ${Date(Date.now)}`);
});

module.exports = app;
