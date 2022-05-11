const router = require('express').Router();
const loginRoutes = require("./login.js");
const dashRoutes = require("./dashboard.js");
const postRoutes = require("./post.js");

router.use("/login",loginRoutes)
router.use("/dashboard", dashRoutes)
router.use("/post", postRoutes);

router.get("/",(req,res)=>{
    res.render('homepage',{loggedIn:req.session.loggedIn});
})

router.get("/select",(req,res)=>{
    if (req.session.loggedIn){
        res.render('postSelect',{loggedIn:req.session.loggedIn})
        return
    }
    res.redirect('/login');
})

module.exports = router;