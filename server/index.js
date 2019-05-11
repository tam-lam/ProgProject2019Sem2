import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/crmRoutes";
import cookieParser from "cookie-parser";
import session from "express-session";
// import auth from './src/auth';

const config = require("config");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// const db = config.get("mongoURI");
const db =
  process.env.MONGODB_URL ||
  "mongodb://forestspirit:Ellesmera1011@ds155086.mlab.com:55086/heroku_7vgv240g";

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (req, res) => {
    es.sendFile(path.join(__dirname, "../build", "index.html"));
  });
}
// mongoose connection
try {
  mongoose.Promise = global.Promise;
  mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
} catch (err) {
  console.log(err);
}

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cookieParser setu
app.use(cookieParser());

app.use(
  session({
    secret: "very secret 12345",
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

app.use("/getUser", require("./src/routes/getUserDetails"));

routes(app);
// ... other app.use middleware
app.use(express.static(path.join(__dirname, "../build")));

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});
app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
// ... other imports
