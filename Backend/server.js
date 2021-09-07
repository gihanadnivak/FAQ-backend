const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require('dotenv').config();

const PORT = process.env.PORT || 5000 ;
const URL = process.env.MONGODB_URL ;

const app = express();

//Allow CORS
app.use(cors());

//Initialize Body Parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// mongoose.set("useCreateIndex", true);

//Import Routes
const FaqRoute = require("./routes/faq.routes");

//Use Routes
app.use("/api/faq", FaqRoute);

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected Successfully!");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log("Server Started on port ", PORT);
});


