const router = require('express').Router();
const userRouteFlow = require("./userRoutes");
const thoughtRouteFlow = require("./thoughtRoutes");

router.use("/users", userRouteFlow);
router.use("/thoughts", thoughtRouteFlow);
module.exports = router;