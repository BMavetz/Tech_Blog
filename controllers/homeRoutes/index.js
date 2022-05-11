const router = require('express').Router();
const loginRoutes = require("./login.js");
const dashRoutes = require("./dashboard.js");
const postRoutes = require("./post.js");
const updateRoutes = require("./update.js");

router.use("/login",loginRoutes)
router.use("/dashboard", dashRoutes)
router.use("/post", postRoutes);
router.use("/update",updateRoutes);

router.get("/",(req,res)=>{
    res.render('homepage',{loggedIn:req.session.loggedIn});
})

router.get("/select",(req,res)=>{
        res.render('postSelect',{loggedIn:req.session.loggedIn})
})

module.exports = router;