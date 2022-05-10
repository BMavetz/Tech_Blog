const router = require('express').Router();
// const {User} = require('../../models');

router.get('/',(req,res)=>{
    if (req.session.loggedIn){
        res.render('dashboard', {loggedIn:req.session.loggedIn});
        return
    }
    res.redirect('/login');
})

module.exports = router;