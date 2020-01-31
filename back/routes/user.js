const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../models");
const passport = require("passport");

const router = express.Router();

router.get("/", (req, res) => {
    if (!req.user) {
        return res.status(401).send("로그인이 필요합니다.");
    }
    return res.json(req.user);
});

router.post("/", async (req, res, next) => {
    // POST  /api/user 회원가입
    try {
        const exUser = await db.User.findOne({
            where: {
                userId: req.body.userId
            }
        });
        if (exUser) {
            return res.status(400).send("이미 사용 중인 아이디입니다.");
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const newUser = await db.User.create({
            nickname: req.body.nickname,
            userId: req.body.userId,
            password: hashedPassword
        });
        console.log(newUser);
        return res.status(200).json(newUser);
    } catch (e) {
        console.error(e);
        // return res.status(403).send(e);
        // 에러 처리를 여기서
        return next(e);
    }
});

router.get("api/user/:id", (req, res) => {
    // 남의 정보 가져오는 것
    // :id -> req.params.id로 가져올 수 있음
});

router.post("/logout", (req, res) => {
    req.logout();
    req.session.destroy();
    res.send("logout 성공");
});

router.post("/login", (req, res, next) => {
    // /POST /api/user/login
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async loginErr => {
            try {
                if (loginErr) {
                    return next(loginErr);
                }
                const fullUser = await db.User.findOne({
                    where: { id: user.id },
                    include: [
                        {
                            model: db.Post,
                            as: "Posts",
                            attributes: ["id"]
                        },
                        {
                            model: db.User,
                            as: "Followings",
                            attributes: ["id"]
                        },
                        {
                            model: db.User,
                            as: "Followers",
                            attributes: ["id"]
                        }
                    ],
                    attributes: ["id", "nickname", "userId"]
                });
                console.log(fullUser);
                return res.json(fullUser);

                // console.log("login success", req.user);
                // const filteredUser = Object.assign({}, user.toJSON());
                // delete filteredUser.password;
                // return res.json(filteredUser);
            } catch (e) {
                next(e);
            }
        });
    })(req, res, next);
});

router.post("/:id/follow", (req, res) => {
    // /api/user/:id/follow
});

router.get("/:id/follow", (req, res) => {});

router.delete("/:id/follow", (req, res) => {});

router.delete("/:id/follower", (req, res) => {});

router.get("/:id/posts", (req, res) => {});

module.exports = router;
