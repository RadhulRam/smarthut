const express = require("express");
const createError = require("http-errors");

const dotenv = require("dotenv");

const app = express();
const cors = require("cors");
// .env config

dotenv.config();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
// data base connection
const db = require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routs
const homeRouter = require("./routs/home");
const clientRouter = require("./routs/client");
const adminRouter = require("./routs/admin");
const { errorHandler } = require("./middleware/error");

// redirects to roughts
app.use("/", homeRouter);
app.use("/admin", adminRouter);
app.use("/client", clientRouter);
//error Middleware

app.use(errorHandler)

// data connection call
db.connect((err) => {
  if (err) console.log(`Connection error${err}`);
  else console.log("Datebase Connected to port 27017");
});
app.listen(process.env.PORT, () => {
  console.log(`sever started running on localhost: ${process.env.PORT}`);
});
