const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Message=require('../models/messages')
const sendMail = require('../Helper/Nodemailer')

router.post('/',async(req,res)=>{
   const {email, phoneNumber,firstName,lastName,message}=req.body
   try {
        const msg=await Message.create({email,phoneNumber,firstName,lastName,message})
        sendMail({email,name:firstName},0,{})
        res.status(200).send('Message sent')
   } catch (error) {
      res.status(400).send('Some error occured')
   }
})

module.exports=router