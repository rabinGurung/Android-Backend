const {comment} = require('../Database Connection/Database')


const addComment = (req,res,next)=>{
    comment
    .create({
        text:req.body.text,
        username:req.body.username,
        postid:req.body.postid
    })
    .then(()=>{
        res.sendStatus(200)
    })
    .catch(()=>{
        res.sendStatus(404)
    })
}

const getComment = (req,res,next)=>{
    //console.log(req.params.username)
    //console.log(req.params.postid)
    console.log('username',req.body.username)
    console.log('post id',req.body.postid)
    try{
    comment
    .findAll({
        where : {
            username : req.params.username,
            postid : req.params.postid
        }
    })
    .then((result)=>{
        // console.log(result)
        // res.send(result)
    })
    .catch((error)=>{
        // console.log(error)
        // res.sendStatus(500)
    })    
    }catch(error){
        res.send(error)
    }
    
}

module.exports = {
    addComment,
    getComment
}