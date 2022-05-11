const router = require('express').Router()
// const { DataTypes } = require('sequelize/types');
const {User, Post} = require("../../models")

// this is registering
router.post("/",async (req,res)=>{
    try{
        const newUser = await User.create({
            user_name:req.body.username,
            password:req.body.password
        });
        res.json({newUser})
    }catch(err){
        res.status(500).json(err)
    }
})

router.post('/login',async (req,res)=>{
    try{
        const userData = await User.findOne({
            where:{
                user_name: req.body.username,
            }
        });

        if(!userData){
            res.status(400).json({message:"Incorrect username or password."});
            return;
        }
        const validPassword = userData.checkPassword(req.body.password)
        if (!validPassword){
            res.status(400).json({message:'Incorrect email or password'});
            return;
        }
        req.session.save(async ()=>{
            req.session.loggedIn = true;
            req.session.userId = userData.getDataValue("id");
            console.log(req.session);
            res.status(200).json({user:userData,message: 'You are now logged in'})
        })
    }catch(err){
        res.status(500).json(err)
    }
})

router.post("/logout",(req,res)=>{
    console.log("logging out")
    req.session.save(async ()=>{
        req.session.loggedIn = false;
        console.log(req.session)
        res.status(200).json({message:'You are now logged out.'})
    })
})

router.get("/",async(req,res)=>{
    try{
        const results = await User.findByPk(req.session.userId,{
            include:[{model:Post}]
        });
        res.json(results)
    }catch(err){
        res.status(500).json({message:'bad request1'})
    }
})


module.exports = router;