if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const tripsRouter = require("./routes/trips");

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to Database"));

app.use(cors());
app.use(express.json());
app.use("/trips", tripsRouter);

app.listen(process.env.PORT || 3000, () => console.log("server on"));
