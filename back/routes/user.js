const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../models");

const router = express.Router();

router.get("/", (req, res) => {});

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
            userId: req.bopdy.userId,
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

router.post("/logout", (req, res) => {});

router.post("/login", (req, res) => {});

router.post("/:id/follow", (req, res) => {});

router.get("/:id/follow", (req, res) => {});

router.delete("/:id/follow", (req, res) => {});

router.delete("/:id/follower", (req, res) => {});

router.get("/:id/posts", (req, res) => {});

module.exports = router;
