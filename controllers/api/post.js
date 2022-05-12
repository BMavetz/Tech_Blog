const router = require('express').Router()
// const { DataTypes } = require('sequelize/types');
const {Post, User, Comment} = require("../../models")

router.post("/",async (req,res)=>{
    try{
        const newPost = await Post.create({
            body:req.body.content,
            title:req.body.title,
            date: req.body.date,
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
            include:[{model:User}, {model:Comment}]
        });
        res.json(results)
    }catch(err){
        res.status(500).json({message:'bad request1'})
    }
})

router.post("/:id",(req,res)=>{
    console.log("saving request")
    req.session.save(async ()=>{
        req.session.postId = req.params.id;
        console.log(req.session)
        res.status(200).json({message:'Post Id has been updated in session'})
    })
})

router.get("/",async(req,res)=>{
    try{
        const results = await Post.findByPk(req.session.postId,{
            include:[{model:User}, {model:Comment}]
        });
        res.json(results)
    }catch(err){
        res.status(500).json({message:'bad request1'})
    }
})

router.put("/update", async (req,res) => {
    try{
        console.log(req.body);
        const requestData = await Post.update(req.body, {
            where: {
                id: req.session.postId,
            },
        });
        if (!requestData[0]){
            res.status(404).json({message: 'No request with this ID.'});
            return;
        }
        res.status(200).json(requestData);
    }catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/delete', async (req, res) => {
    try {
      const requestData = await Post.destroy({
        where: {
          id: req.session.postId,
        },
      });
  
      if (!requestData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(requestData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;