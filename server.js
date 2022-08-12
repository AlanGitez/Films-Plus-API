const express = require("express");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
require('dotenv').config()

const db = require("./db");
const models = require("./models");

const app = express();

corsOptions = {
    origin: [
      'http://localhost:3000',
      'https://virtualeventst3.netlify.app',
      'https://virtual-events-t3.herokuapp.com/api-docs',
    ],
    credentials: true,
  };

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors(corsOptions));

//routes
app.use("/api", routes);

(async () => {
    try {
      await db.sync({ force: false });
      app.listen(3001, () => {
        console.log(`server is running on port ${3001}`);
      });
    } catch (error) {
      console.error('Unable to connect:', error.message);
    }
  })();


