const Router = require('express').Router()
const {addPost,getAllpost,getOnlyonePost, getOneUserPost} = require('../Database Controller/postController')
const multer = require('multer')
const path = require('path')
const {getUserCountPostDecember,
  getUserCountPostNovember,
  getUserCountPostJan,
  getUserCountPostFeb,
  getUserCountPostMarch,
  getUserCountPostApril,
  getUserCountPostMay,
  getUserCountPostJune,
  getUserCountPostJuly,
  getUserCountPostAugust,
  getUserCountPostOctober,
  getUserCountPostSeptember} = require('../Database Connection/Database')

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


Router.post('/uploadImage',imageUpload,(req,res)=>{
    res.sendStatus(200)
})
Router.post('/addpost',imageUpload,addPost)
Router.post('/post',(req,res,next)=>{
  console.log(req.body.text, req.body.username, req.body.image)
  res.sendStatus(200)
})

Router.get('/getAllpost',getAllpost)
Router.get('/getOneUserPost/:username',getOneUserPost)
Router.get('/getOnlyonePost/:username/:id',getOnlyonePost)


Router.get('/getPostCount',getUserCountPostDecember,
getUserCountPostNovember,
getUserCountPostJan,
getUserCountPostFeb,
getUserCountPostMarch,
getUserCountPostApril,
getUserCountPostMay,
getUserCountPostJune,
getUserCountPostJuly,
getUserCountPostAugust,
getUserCountPostOctober,
getUserCountPostSeptember,(req,res)=>{
  res.send({
    "jan":req.jan,
    "feb":req.feb,
    "march":req.march,
    "april":req.april,
    "may":req.may,
    "june":req.june,
    "july":req.july,
    "august":req.august,
    "october":req.october,
    "september":req.september,
    "november":req.november,
    "december":req.december
})
})

module.exports = Router