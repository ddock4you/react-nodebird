const express = require("express");

const db = require("./models");
const userAPIRouter = require("./route/user");
const postAPIRouter = require("./route/post");
const postsAPIRouter = require("./route/posts");

const app = express();
db.sequelize.sync();

// 요청에 대한 응답을 보내주는 영역(?) -> controller
// API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
app.use("/api/user", userAPIRouter);
app.use("/api/post", postAPIRouter);
app.use("/api/posts", postsAPIRouter);

app.listen(3065, () => {
    console.log("server is running on http://localhost:3065");
});
