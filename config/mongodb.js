const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

class Server {
  app = null;

  constructor() {
    this.app = express();

    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());

    this.connectdb();
  }

  async connectdb() {
    try {
      const connectionInstance = await mongoose.connect(
        process.env.ENVIRONMENT === "dev"
          ? `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
          : `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
      );
      console.log(`DB CONNECTED, HOST: ${connectionInstance.connection.host}`);
    } catch (err) {
      console.log("ERROR IN DB CONNECTION:: ", err);
      process.exit(1);
    }
  }

  listenToServer() {
    this.app.listen(process.env.PORT || 8000, () =>
      console.log(`Server running on PORT ${process.env.PORT}`)
    );
  }
}

const server = new Server();

module.exports = server;
