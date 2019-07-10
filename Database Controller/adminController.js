const {admin} = require('../Database Connection/Database')



const addAdmin =(req,res,next)=>{
    admin.create({
        username : req.body.username,
        password:req.hashpassword
    })
    .then((result)=>{
        next()
    })
    .catch((error)=>{
        res.status(409)
    })
}

const loginAdmin = (req,res,next) =>{
    admin
        .findOne({
            where : {username : req.body.username}
        })
        .then((result)=>{
            req.userHashPassword = result.dataValues.password
            next()
        })
        .catch((error)=>{
            res.sendStatus(409)
        })
}


module.exports = {
    addAdmin, 
    loginAdmin
    
    
}

