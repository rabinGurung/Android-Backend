const {addComment, getComment} = require('../Database Controller/commentController')

const Router = require('express').Router()

Router.post('/addComment/:username/:postid',addComment)

Router.get('/getComment',getComment)

module.exports = Router
