const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('newpost', {loggedIn:req.session.loggedIn});
})

module.exports = router;