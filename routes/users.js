const express  = require("express");
const { find } = require("../models/user");
const router = express.Router();
const User = require('../models/user')

router.get('/',async(req,resp)=>{
try{
    const users= await User.find()
    resp.send(users) 
}catch{
    resp.send("Error "+ err)
}

})

router.post('/',async(req,resp)=>{
    const user= new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    try{
     const a1 = await user.save()
     resp.json(a1)
    }catch(err){
        resp.send('Error '+ err)
    }
})
 router.get('/:id',async(req,resp)=>{
    try{
        const user = await User.findById(req.params.id)
        resp.json(user)
    }catch(err){
        resp.send('Error '+ err)
    }
 })

router.patch('/:id',async(req,resp)=>{
    try{
        const user = await User.findById(req.params.id)
        user.email = req.body.email
        const a1 = await user.save()
        resp.json(a1)
    }catch(err){
        resp.send('Error')
    }
})

router.delete('/:id',async(req,resp)=>{
    try{
        const user = await User.findById(req.params.id)
        const a1 = await user.remove()
        resp.json(a1)
    }catch(err){
        resp.send('Error')
    }
})

module.exports = router