const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PlanetsRoute = require("./routes/PlanetsRoute");
const addRoute = require("./routes/addRoute");

const cors = require("cors");

//Don't forget run express.json middleware to get data as json form.
app.use(express.json());
//To connect both front-end and back-end, you should run a middle ware called 'cors', to prevent a cors error.
app.use(cors());
//it allows us to use  .env file.
dotenv.config();

const port = process.env.PORT || 4000;

app.use(express.static(__dirname + "/backend/build"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/backend/build/index.html");
});

app.use("/planets", PlanetsRoute);
app.use("/add", addRoute);

app.listen(port, () => {
  console.log(`Anass sever is running on ${port}`);
});
