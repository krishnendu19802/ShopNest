const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/usermodel')
require('dotenv').config()
const verifyToken =  (req, res, next) => {
    // Check for token in headers
    // console.log('header',req.headers)
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        next()
    }
    // Verify token
    else {
        // console.log(token)


        jwt.verify(token, process.env.SECRET_KEY, async(err, decoded) => {
            if (err) {
                console.log('Not found in webtoken')
                next()

            }
            // Token is valid, attach decoded user information to request object
            const id = decoded.id;
            const user=await User.findById(id)
            res.status(200).send({ name: user.name, email: user.email, id: user.id, cartcount: user.cart.length, message: 'Successfull'})
            // next();

        });
    }
}


router.post('/', verifyToken, async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(201).send({ message: 'User not found' })
            return
        }

        const result = await bcrypt.compare(password, user.password)
        // console.log(result)
        if (result) {
            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '7d' });
            res.status(200).send({ name: user.name, email: user.email, id: user.id, cartcount: user.cart.length, message: 'Successfull', token })
        }
        else {
            res.status(400).send({ message: 'Passwords do not match' })
        }
    } catch (error) {
        res.status(400).send('Some error occured: ', error)
    }
})
module.exports = router