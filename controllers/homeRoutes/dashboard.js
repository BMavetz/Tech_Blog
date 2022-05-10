const router = require('express').Router();
// const {User} = require('../../models');

router.get('/',(req,res)=>{
    if (req.session.loggedIn){
        res.render('dashboard', {loggedIn:req.session.loggedIn});
        return
    }
    res.redirect('/login');
})

router.get('/post',(req,res)=>{
        res.render('newPost', {loggedIn:req.session.loggedIn});
})

module.exports = router;