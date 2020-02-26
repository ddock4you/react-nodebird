const express = require("express");
const next = require("next");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const dotenv = require("dotenv");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const prod = process.env.NODE_ENV === "production";

const app = next({ dev });
// next의 get요청 처리기
const handle = app.getRequestHandler();
dotenv.config();

app.prepare().then(() => {
    const server = express();

    server.use(morgan("dev"));
    server.use("/", express.static(path.join(__dirname, "public")));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(cookieParser(process.env.COOKIE_SECRET));
    server.use(
        expressSession({
            resave: false,
            saveUninitialized: false,
            secret: process.env.COOKIE_SECRET,
            cookie: {
                httpOnly: true,
                secure: false
            }
        })
    );

    server.get("/post/:id", (req, res) => {
        return app.render(req, res, "/post", { id: req.params.id });
    });

    server.get("/hashtag/:tag", (req, res) => {
        return app.render(req, res, "/hashtag", {
            tag: req.params.tag
        });
    });

    server.get("/user/:id", (req, res) => {
        return app.render(req, res, "/user", { id: req.params.id });
    });

    // 모든 요청을 여기서 처리한다.
    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(prod ? process.env.PORT : 3060, () => {
        console.log(`next + express running on port ${process.env.PORT}`);
    });
});
