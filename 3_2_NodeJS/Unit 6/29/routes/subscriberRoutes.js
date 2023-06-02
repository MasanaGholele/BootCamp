const router = require("express").Router();
const subscribersController = require("../controllers/subscribersController");

router.get("/", subscribersController.index, subscribersController.indexView);
router.get("/new", subscribersController.new);
router.post("/create", subscribersController.create, subscribersController.redirectView);
router.get("/:id", subscribersController.show, subscribersController.showView);
router.get("/:id/edit", subscribersController.edit);
router.put("/:id/update", subscribersController.update, subscribersController.redirectView);
router.delete("/:id/delete", subscribersController.delete, subscribersController.redirectView);
router.get("/contact", subscribersController.getSubscriptionPage);
router.post("/subscribe", subscribersController.saveSubscriber);

module.exports = router;