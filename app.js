require("dotenv").config({ path: ".env" });

const fixedEndPoint = "/api/v1";

const server = require("./config/mongodb");

const examRouter = require("./routes/assessment/exam.route");
server.app.use("/api/v1/exam", examRouter);

const courseRouter = require("./routes/assessment/course.route");
server.app.use(`${fixedEndPoint}/course`, courseRouter);

server.listenToServer();
