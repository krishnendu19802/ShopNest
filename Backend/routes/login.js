const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const User=require('../models/usermodel')

router.post('/',async (req,res)=>{
    const {email,password}=req.body

    try {
        const user=await User.findOne({email})
        if(!user){
            res.status(201).send('User not found')
            return
        }

            
        if(bcrypt.compare(password,user.password)){
            res.status(200).send({name:user.name, email:user.email, id: user.id,cartcount:user.cart.length})
        }
        else{
            res.status(400).send('Passwords do not match')
        }
    } catch (error) {
        res.status(400).send('Some error occured: ',error)
    }
})
module.exports=router