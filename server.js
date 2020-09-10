const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlroutes = require("./router/htmlrouter")
const apiroutes = require("./router/apirouter")

const PORT = process.env.PORT || 3000;

// const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(htmlroutes)
app.use(apiroutes);

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
