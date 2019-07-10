const {friend} = require('../Database Connection/Database')


const getFriends = (req,res,next) =>{
    friend
    .findAll({
        where : {userid : req.params.userid}
    })
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.sendStatus(404)
    })
}

const addFriend = (req,res,next)=>{
    friend
    .create({
        UserId:req.body.userid,
        friendId:req.body.friendid
    })
    .then((result)=>{
        res.sendStatus(200)
    })
    .catch((error)=>{
        console.log(error)
        res.sendStatus(500)
    })
}

module.exports = {
    addFriend,
    getFriends
}