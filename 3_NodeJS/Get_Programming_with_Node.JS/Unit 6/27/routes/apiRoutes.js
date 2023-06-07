const router = require("express").Router();
const subscribersController = require("../controllers/subscribersController");
const coursesController = require("../controllers/coursesController");
const usersController = require("../controllers/usersController");

// The index action in coursesController.js already attaches courses to the response’s locals
// object. Take that locals object and display it in JSON format instead of rendering the data in EJS.
router.get("/courses", coursesController.index, coursesController.filterUserCourses, coursesController.respondJSON);
router.get("/courses/:id/join", coursesController.join, coursesController.respondJSON);

router.get("/subscribers", subscribersController.index, subscribersController.respondJSON);

router.get("/users", usersController.index, usersController.respondJSON);
router.post("/users/new", usersController.validate, usersController.create, usersController.respondJSON);

router.use(coursesController.errorJSON);

module.exports = router;