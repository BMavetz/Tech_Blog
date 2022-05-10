const router = require('express').Router()
// const { DataTypes } = require('sequelize/types');
const {Post, User} = require("../../models")

router.post("/",async (req,res)=>{
    try{
        const newPost = await Post.create({
            body:req.body.content,
            title:req.body.title,
            user_id: req.session.userId
        });
        res.json({newPost})
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/all",async(req,res)=>{
    try{
        const results = await Post.findAll({
            include:[{model:User}]
        });
        res.json(results)
    }catch(err){
        res.status(500).json({message:'bad request1'})
    }
})

module.exports = router;