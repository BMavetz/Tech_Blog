const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('createpost', {loggedIn:req.session.loggedIn});
})

module.exports = router;