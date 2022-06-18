import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, this is an auth endpoint");
});

router.get("/register", (req, res) => {
    res.send("Hello, this is an auth register endpoint");
})

export default router;