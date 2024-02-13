require("dotenv").config({ path: ".env" });

const server = require("./config/mongodb");

const examRouter = require("./routes/assessment/exam.route");
server.app.use("/api/v1/exam", examRouter);

server.listenToServer();
