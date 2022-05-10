const router = require('express').Router();
const loginRoutes = require("./login.js");
const dashRoutes = require("./dashboard.js");

router.use("/login",loginRoutes)
router.use("/dashboard", dashRoutes)

router.get("/",(req,res)=>{
    res.render('homepage',{loggedIn:req.session.loggedIn});
})

module.exports = router;