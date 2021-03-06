const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const expressSassion = require("express-session");
const dotenv = require("dotenv");
const passport = require("passport");

const passportConfig = require("./passport");
const db = require("./models");
const userAPIRouter = require("./routes/user");
const postAPIRouter = require("./routes/post");
const postsAPIRouter = require("./routes/posts");
const hashtagAPIRouter = require("./routes/hashtag");

dotenv.config();
const app = express();
db.sequelize.sync();
passportConfig();

app.use(morgan("dev"));
app.use("/", express.static("uploads"));
app.use(express.json()); // json 형식의 본문을 처리
app.use(express.urlencoded({ extended: true })); // form으로 넘어온 데이터를 처리
app.use(
    cors({
        origin: true,
        credentials: true
    })
);
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
    expressSassion({
        resave: false, // 매번 세션 강제 저장
        saveUninitialized: false, // 빈 값도 저장
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true, // 자바스크립트로 cookie에 접근할 수 없다.
            secure: false // https를 쓸 때 true
        },
        name: "tewrgfs"
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send("react nodebird 백엔드 정상 동작!");
});

app.use("/api/user", userAPIRouter);
app.use("/api/post", postAPIRouter);
app.use("/api/posts", postsAPIRouter);
app.use("/api/hashtag", hashtagAPIRouter);

app.listen(
    process.env.NODE_ENV === "production" ? process.env.PORT : 3065,
    () => {
        console.log(`server is running on ${process.env.PORT}`);
    }
);
