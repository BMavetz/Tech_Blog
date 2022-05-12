const router = require('express').Router()
const {Comment} = require("../../models")

router.post("/",async (req,res)=>{
    try{
        const newComment = await Comment.create({
            user_comment:req.body.comment,
            post_id:req.session.postId,
            // date: req.body.date,
            user_id: req.session.userId
        });
        console.log(req.session);
        res.json({newComment})
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;