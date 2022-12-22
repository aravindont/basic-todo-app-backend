const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

const dotenv = require("dotenv");
const todoRoutes = require("./routes/todos");
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/todos", todoRoutes);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
