const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('updatePost', {loggedIn:req.session.loggedIn});
})

module.exports = router;