const Router = require('express').Router()
const multer = require('multer')
const {updateUser,getOneUser} = require('../Database Controller/userController')
const {verfiyToken} =  require('../Authentication/Token/jwt')
const {updateProfile,findProfile} = require('../Database Controller/profileController')
const path = require('path')

var assetStorage = multer.diskStorage({
    destination: './Resources/Images/upload',
    filename: (req, file, callback) => {
        let ext = path.extname(file.originalname);
        callback(null, file.fieldname + '-' + Date.now() + ext);
    }
  });
  
  var imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    }
    cb(null, true);
  }
  
  
  var upload = multer({
      storage: assetStorage,
      fileFilter: imageFileFilter,
      limits: { fileSize: 10000000 }
  })
  
  var imageUpload = upload.single('imageFile')
  



Router.post('/imageUpload',imageUpload,(req,res,next)=>{
  res.json(req.file);
}) 

Router.put('/updateUserProfile/',updateProfile,updateUser,(req,res)=>{
  res.sendStatus(200)
})


Router.get('/getUser/:username',findProfile,getOneUser,(req,res)=>{
  res.status(200).send({
    "result":req.result,
    "image":req.imageFile
  })
})

Router.get('/getOneprofile/:username',findProfile,(req,res)=>{
  res.status(200).send({
    "data":req.result
  })
})




module.exports = Router