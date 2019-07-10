const {user} = require('../Database Connection/Database')


const registerUser = (req,res,next)=>{
    user.create({
        username:req.body.username,
        password:req.hashpassword,
        email:req.body.email,
        verified:0
    })
    .then((result)=>{
        console.log('data inserted')})
        next()
    .catch((error)=>{
        console.log('error')
    })
}

const getAllUsers = (req,res)=>{
    user
    .findAll({
        where: {verified : 1}
    })
    .then((result)=>{
        res.send(result)
    })
    .catch((error)=>{
        res.sendStatus(500)
    })
}
const getOneUser = (req,res,next)=>{
    console.log(req.params.username)
    user
    .findOne({where : {username : req.params.username}})
    .then((result)=>{
        console.log('got one user')
        req.result = result
        next()
    })
    .catch((error)=>{
        console.log('got error user')
        res.sendStatus(404)
    })
}

const getOneByID = (req,res,next)=>{
    user
    .findOne({where : {id : req.params.id}})
    .then((result)=>{
        res.send(result)
    })
    .catch((error)=>{
        res.sendStatus(404)
    })
}

const findOneEmail = (req,res,next)=>{
    user
    .findOne({
        where : {email : req.body.email}
    })
    .then((result)=>{
        if(result.dataValues != ''){
            res.status(409).send('Email already exists')
        }
    })
    .catch((error)=>{
        next()
    })
}

const findOneUser = (req,res,next)=>{
    console.log(req.body.username)
    console.log(req.body.password)
    user
        .findOne({
            where : {username : req.body.username}
        })
        .then((result)=>{
            req.userHashPassword = result.dataValues.password
            req.verified = result.dataValues.verified
            next()
        })
        .catch((error)=>{
            res.sendStatus(409)
        })
}
const findOneFacebookUser = (req,res,next)=>{
    user
        .findOne({
            where : {username : req.body.email}
        })
        .then((result)=>{
            req.userHashPassword = result.dataValues.password
            req.verified = result.dataValues.verified
            next()
        })
        .catch((error)=>{
            res.sendStatus(409)
        })
}



const updateUser = (req,res,next) =>{
    user
    .update(
        { 
            firstname: req.body.firstname,
            lastname:req.body.lastname,
            gender:req.body.gender,
            birth_date:req.body.birth_date,
            latitude:req.body.latitude,
            longitude:req.body.longitude,
            verified:1
        },
        { where: { username: req.body.username } }
      )
        .then(result =>{
          if(result){
            console.log('updated')
            res.sendStatus(200)
          }
        } 
        )
        .catch(err =>{
            console.log(err)
            res.sendStatus(500)
        }
          
        )
}


const getVerified = (req,res) =>{
    user
    .findOne({
        where:{username:req.body.username}
    })
    .then((result)=>{
        if(result.dataValues != ""){
            res.status(200).send({verified:result.verified})
        }
    })
    .catch(()=>{
        res.sendStatus(500)
    })
}

const findOneUsername = (req,res,next)=>{
    user
        .findOne({
            where : {username : req.body.username}
        })
        .then((result)=>{
            if(result.dataValues != ""){
                res.sendStatus(409)
            }
        })
        .catch(()=>{
            next()
        })
}



const validateForsignUp = (req,res,next)=> {
    user.findOne({
        where:{username : req.body.username}})
    .then((result)=>{
        if(result.dataValues != ''){
            res.status(409).send('User already exists')
        }
    })
    .catch(()=>{
        //console.log(error)
        next()
    })
}


module.exports = {
    registerUser,
    getAllUsers,
    findOneUser,
    validateForsignUp,
    findOneEmail,
    findOneUsername,
    updateUser,
    getVerified,
    getOneUser,
    findOneFacebookUser,
    getOneByID
}
