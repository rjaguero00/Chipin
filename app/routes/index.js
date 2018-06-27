const router = require("express").Router();
const activitiesRoutes = require("./activitiesRoutes");

// Volunteer Activities routes
router.use("/articles", activitiesRoutes);

module.exports = router;