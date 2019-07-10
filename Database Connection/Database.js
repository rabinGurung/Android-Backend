const Sequelize = require('sequelize')
const {database_host, database_name, database_user_name, database_user_password} = require('../Config/GLOABALS')
const UserModel = require('../Model/User')
const ProfileModel = require('../Model/Profile')
const PostModel = require('../Model/Post')
const CommentModel = require('../Model/Comment')
const FriendModel = require('../Model/friends')
const AdminModel = require('../Model/Admin')
const sequelize = new Sequelize(database_name,database_user_name,database_user_password, {
    host: database_host,
    dialect: 'mysql'
  });


const user = UserModel(sequelize,Sequelize)
const profile = ProfileModel(sequelize,Sequelize)
const post = PostModel(sequelize,Sequelize)
const comment = CommentModel(sequelize,Sequelize)
const friend = FriendModel(sequelize,Sequelize)
const admin = AdminModel(sequelize, Sequelize)
sequelize.sync({ force: false })
.then(() => {
  console.log(`Database & tables created!`)
})
.catch(()=>{
    console.log(`Could not create table`)
})



const getUserCountJan = (req,res,next) =>{
    sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-01-00' and createdAt < '2019-02-00'",{type: sequelize.QueryTypes.SELECT})
    .then((results)=>{
      req.jan = results
      next()
    })
    .catch((error)=>{
      res.sendStatus(404)
    })
}

const getUserCountFeb = (req,res,next) =>{
  sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-02-00' and createdAt < '2019-03-00'",{type: sequelize.QueryTypes.SELECT})
  .then((results)=>{
    req.feb = results
    console.log(req.feb)
    next()
  })
  .catch((error)=>{
    res.sendStatus(404)
  })
}

const getUserCountMarch = (req,res,next) =>{
  sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-03-00' and createdAt < '2019-04-00'",{type: sequelize.QueryTypes.SELECT})
  .then((results)=>{
    req.march = results
    next()
  })
  .catch()
}
const getUserCountApril = (req,res,next) =>{
  sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-04-00' and createdAt < '2019-05-00'",{type: sequelize.QueryTypes.SELECT})
  .then((results)=>{
    req.april = results
    next()
  })
  .catch((error)=>{
    res.sendStatus(404)
  })
}
const getUserCountMay = (req,res,next) =>{
  sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-05-00' and createdAt < '2019-06-00'",{type: sequelize.QueryTypes.SELECT})
  .then((results)=>{
    req.may = results
    next()
  })
  .catch((error)=>{
    res.sendStatus(404)
  })
}
const getUserCountJune = (req,res,next) =>{
  sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-06-00' and createdAt < '2019-07-00'",{type: sequelize.QueryTypes.SELECT})
  .then((results)=>{
    req.june = results
    next()
  })
  .catch((error)=>{
    res.sendStatus(404)
  })
}
const getUserCountJuly = (req,res,next) =>{
  sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-07-00' and createdAt < '2019-08-00'",{type: sequelize.QueryTypes.SELECT})
  .then((results)=>{
    req.july = results
    next()
  })
  .catch((error)=>{
    res.sendStatus(404)
  })
}
const getUserCountAugust = (req,res,next) =>{
  sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-08-00' and createdAt < '2019-09-00'",{type: sequelize.QueryTypes.SELECT})
  .then((results)=>{
    req.august = results
    next()
  })
  .catch((error)=>{
    res.sendStatus(404)
  })
}
const getUserCountSeptember = (req,res,next) =>{
  sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-09-00' and createdAt < '2019-10-00'",{type: sequelize.QueryTypes.SELECT})
  .then((results)=>{
    req.september = results
    next()
  })
  .catch((error)=>{
    res.sendStatus(404)
  })
}

const getUserCountOctober = (req,res,next) =>{
  sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-10-00' and createdAt < '2019-11-00'",{type: sequelize.QueryTypes.SELECT})
  .then((results)=>{
    req.october = results
    next()
  })
  .catch((error)=>{
    res.sendStatus(404)
  })
}

const getUserCountNovember = (req,res,next) =>{
  sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-11-00' and createdAt < '2019-12-00'",{type: sequelize.QueryTypes.SELECT})
  .then((results)=>{
    req.november = results
    next()
  })
  .catch((error)=>{
    res.sendStatus(404)
  })
}

const getUserCountDecember = (req,res,next) =>{
  sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-12-00' and createdAt < '2020-00-00'",{type: sequelize.QueryTypes.SELECT})
  .then((results)=>{
    req.december = results
    next()
  })
  .catch((error)=>{
    res.sendStatus(404)
  })
}


const getUserCountPostJan = (req,res,next) =>{
  sequelize.query("Select count(*) as count from `Post` Where createdAt >= '2019-01-00' and createdAt < '2019-02-00'",{type: sequelize.QueryTypes.SELECT})
  .then((results)=>{
    req.jan = results
    next()
  })
  .catch((error)=>{
    res.sendStatus(404)
  })
}

const getUserCountPostFeb = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Post` Where createdAt >= '2019-02-00' and createdAt < '2019-03-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.feb = results
  console.log(req.feb)
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}

const getUserCountPostMarch = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Post` Where createdAt >= '2019-03-00' and createdAt < '2019-04-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.march = results
  next()
})
.catch()
}
const getUserCountPostApril = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Post` Where createdAt >= '2019-04-00' and createdAt < '2019-05-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.april = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}
const getUserCountPostMay = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Post` Where createdAt >= '2019-05-00' and createdAt < '2019-06-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.may = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}
const getUserCountPostJune = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Post` Where createdAt >= '2019-06-00' and createdAt < '2019-07-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.june = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}
const getUserCountPostJuly = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Post` Where createdAt >= '2019-07-00' and createdAt < '2019-08-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.july = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}
const getUserCountPostAugust = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Post` Where createdAt >= '2019-08-00' and createdAt < '2019-09-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.august = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}
const getUserCountPostSeptember = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Post` Where createdAt >= '2019-09-00' and createdAt < '2019-10-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.september = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}

const getUserCountPostOctober = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Post` Where createdAt >= '2019-10-00' and createdAt < '2019-11-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.october = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}

const getUserCountPostNovember = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Post` Where createdAt >= '2019-11-00' and createdAt < '2019-12-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.november = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}

const getUserCountPostDecember = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Post` Where createdAt >= '2019-12-00' and createdAt <= '2020-00-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.december = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}





module.exports = {
  user,
  profile,
  post,
  comment,
  friend,
  admin,
  getUserCountJan,
  getUserCountFeb,
  getUserCountMay,
  getUserCountApril,
  getUserCountAugust,
  getUserCountMarch,
  getUserCountJune,
  getUserCountJuly,
  getUserCountOctober,
  getUserCountSeptember,
  getUserCountNovember,
  getUserCountDecember,
  getUserCountPostDecember,
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
  getUserCountPostSeptember
}

