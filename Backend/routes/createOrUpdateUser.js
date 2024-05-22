const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const User = require('../models/usermodel')
const bcrypt = require('bcrypt')
router.post('/', async (req, res) => {
    // console.log('Reached here')
    // console.log(req.body)
    const { email, name, password } = req.body
    try {
        const hpassword=await bcrypt.hash(password,10);
        const resp = await User.create({ email, name, password:hpassword })
        res.status(200).send({email:resp.email, id:resp.id, message: 'Registration successful'})
    } catch (error) {
        res.status(400).send({message:`Error: ${error}`})
    }
})

router.put('/', async (req, res) => {
    const { id, updatefield, updatevalue } = req.body
    try {
        const update = { [updatefield]: updatevalue };
        const upduser = await User.findByIdAndUpdate(
            id,
            { $set: update },
            { new: true, runValidators: true }
        );

if (!upduser)
    res.status(400).send('User not found')
else
    res.status(200).send(upduser)
    } catch (error) {
    res.status(400).send(`Error: ${error}`)

}
})





module.exports = router