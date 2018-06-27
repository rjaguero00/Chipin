const router = require("express").Router();
const activitiesController = require("../../controllers/activitiesController");

// Matches with "/api/activities" 
router.route("/")
    .get(activitiesController.findAll)
    .post(activitiesController.postEvent);

 // Matches with "/api/activities/:id" 
router.route("/:id")
    .delete(activitiesController.remove)


module.exports = router; 
