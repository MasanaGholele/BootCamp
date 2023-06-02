const router = require("express").Router(),
    userRoutes = require("./userRoutes"),
    subscriberRoutes = require("./subscriberRoutes"),
    courseRoutes = require("./courseRoutes"),
    errorRoutes = require("./errorRoutes"),
    homeRoutes = require("./homeRoutes");
const apiRoutes = require("./apiRoutes")

// Order matters. Make sure to have the more-detailed routes closer to the top of index.js
// Express.js router operates through middleware. Using it you can define the tasks you want it to perform on

router.use("/users", userRoutes);
router.use("/subscribers", subscriberRoutes);
router.use("/courses", courseRoutes);
router.use("/api", apiRoutes)

router.use("/", homeRoutes);
router.use("/", errorRoutes);

module.exports = router;