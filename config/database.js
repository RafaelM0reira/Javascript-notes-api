const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect("mongodb://localhost/javascriptNote", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection succesful"))
  .catch((err) => console.log(err));
