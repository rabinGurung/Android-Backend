const {profile} = require('../Database Connection/Database')



const updateProfile = (req,res,next) =>{
    
    profile
    .findOne({
        where:{username: req.body.username}
    })
    .then((result)=>{
        console.log('found user')
        if(result){
            updateProfileDetail(req, res, next)
        }else{
            insertProfile(req,res,next)
        }       
    })
    .catch((error)=>{
    })

}

const insertProfile = (req,res,next) =>{
    profile.create({
        profileImage : req.body.filename,
        username:req.body.username
    })
    .then((result)=>{
        next()
    })
    .catch((err)=>{
        res.sendStatus(409)
    })
}

const updateProfileDetail =(req,res,next) =>{
    profile.update(
        { 
            profileImage : req.body.filename
        },
        { where: { username: req.body.username } }
    )
    .then((result)=>{
        
        next()
    })
    .catch((err)=>{
        
        res.sendStatus(409)
    })
}



const findProfile = (req,res,next) =>{
    console.log(req.params.username)
    profile
    .findOne({
        where:{username: req.params.username}
    })
    .then((result)=>{
        console.log('findProfile')
        if(result){
            console.log('result found')
            req.result = result.dataValues
            next()
        }
    })
    .catch((error)=>{
        console.log('profile Error found')
        res.sendStatus(404)
    })
}

module.exports = {updateProfile,findProfile}