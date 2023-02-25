const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
// const DB_URI = "mongodb://127.0.0.1:27017/qkart";

let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("DB is Connected")
    })
    .catch((e) => console.log(e))
    
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);


