const router = require("express").Router();
const activitiesController = require("../controllers/activitiesController");

// Matches with "/api/activities" 
router.route("/")
    .get(activitiesController.findAll)
    .post(articlesController.create);

 // Matches with "/api/activities/:id" 
router.route("/:id")
    .delete(articlesController.remove);


module.exports = router; 
