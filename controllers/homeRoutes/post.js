const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('newPost', {loggedIn:req.session.loggedIn});
})

module.exports = router;