// DEPENDENCIES
const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const path = require("path");
const cors = require("cors");

// CONFIGURATION / MIDDLEWARE
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../build")));

// CONTROLLERS 
const shopController = require("./controllers/shop_controller");
app.use("/api/shop", shopController);

// LISTEN
app.listen(4005, () => {
  console.log("Server is running on port 4005");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
})
