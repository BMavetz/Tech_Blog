const router = require('express').Router();
const userRoutes = require("./user")
const postRoutes = require("./post")
// const pantryRoutes = require("./pantry")

router.use("/user",userRoutes)
router.use("/post",postRoutes)
// router.use("/pantry",pantryRoutes)

module.exports = router;