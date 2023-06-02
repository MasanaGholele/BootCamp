const router = require("express").Router();
const homeController = require("../controllers/homeController");

router.get("/", (req, res) => {
    res.render("index");
});

module.exports = router;