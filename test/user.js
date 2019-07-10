const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const chailike = require('chai-like')
const chaithings = require('chai-things')

const app = require('../server')

chai.use(chaiHttp)
chai.use(chailike)
chai.use(chaithings)


describe('Users',function(){
    describe('Post Register',()=>{
        it('It should register a new user',(done)=>{
            chai
            .request(app)
            .post('/user/signup')
            .send({
                'username':'demo12',
                'password':'hello',
                'email':'demo123@gmail.com'
            })
            .end((err,res)=>{
                res.should.have.status(201)
            })
            done()
        })
    })

    describe('Post Login',()=>{
        it('User should logged in as correct credentials are provided',(done)=>{
            chai
            .request(app)
            .post('/user/login')
            .send({
                'username':'leon',
                'password':'1'
            })
            .end((err,res)=>{
                res.should.have.status(202)
            })
            done()
        })
    })

    describe('Get User Details',()=>{
        it('Details of user is send by server with the status code 200',(done)=>{
            chai
            .request(app)
            .get('/user/allusers')
            .send()
            .end((err,res)=>{
                res.should.have.status(200)
            })
            done()
        })
    })

    describe('Admin Login',()=>{
        it('Admin should logged in as correct credentials are provided',(done)=>{
            chai
            .request(app)
            .post('/admin/loginadmin')
            .send({
                'username':'leon',
                'password':'gurung'
            })
            .end((err,res)=>{
                res.should.have.status(202)
            })
            done()
        })
    })

    describe('Posts Addition',()=>{
        it('New Post are added as correct credentials are provided',(done)=>{
            chai
            .request(app)
            .post('/post/post')
            .send({
                'username':'leon',
                'image':'gurung',
                'text':'this is a demo for the test'
            })
            .end((err,res)=>{
                res.should.have.status(200)
            })
            done()
        })
    })

})