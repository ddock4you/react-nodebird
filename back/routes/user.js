const express = require("exporess");
const router = express.Router();

router.get("/", (req, res) => {});

router.post("/", (req, res) => {});

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
