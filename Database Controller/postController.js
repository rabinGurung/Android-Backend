const {post} = require('../Database Connection/Database')


const addPost = (req,res,next)=>{
    post
    .create({
        username:req.body.username,
        text:req.body.text,
        image:req.file.filename
    })
    .then((result)=>{
        res.sendStatus(200)
    })
    .catch((err)=>{
        console.log(err)
        res.sendStatus(500)
    })
}

const getAllpost = (req,res,next)=>{
    post
    .findAll()
    .then((result)=>{
        res.send(result)
    })  
    .catch((err)=>{
        res.sendStatus(404)
    })
}

const getOneUserPost = (req,res,next)=>{
    post
    .findAll({
        where : {username : req.params.username}
    })
    .then((result)=>{
        res.send(result)
    })  
    .catch((err)=>{
        res.sendStatus(404)
    })
}

const getOnlyonePost = (req,res,next) =>{
    post
    .findOne({
        where : {username : req.params.username, id : req.params.id}
    })
    .then((result)=>{
        res.send(result)
    })
    .catch((error)=>{
        res.sendStatus(404)
    })
}

module.exports = {
    addPost,getAllpost,getOnlyonePost, getOneUserPost
}








