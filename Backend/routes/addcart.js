const express = require('express')
const router = express.Router()
const User = require('../models/usermodel')

router.post('/getitems', async (req, res) => {
    const { id } = req.body
    try {
        const userdetails = await User.findById(id)
        res.status(200).send(userdetails.cart)
    } catch (error) {
        res.status(400).send("Error fetching the cart")

    }
})

router.post('/', async (req, res) => {
    const { id, productId, quantity, image, price,name } = req.body
    try {
        const user = await User.findById(id)
        // res.status(200).send(user)
        let same;
        let cart = user.cart.filter((ct) => {
            if (ct.productId != productId)
                return true
            else {
                same = ct
                return false
            }
        })
        // console.log(same)
        if (same === undefined)
            cart.push({
                productId,
                quantity,
                image,
                price,
                name
            })
        else {
            cart.push({
                productId,
                'quantity': quantity + same.quantity,
                image,
                price,
                name
            })
        }
        const updateduser = await User.findByIdAndUpdate(
            id,
            { $set: { cart } },
            { new: true, runValidators: true }

        )
        res.status(200).send('Successfully added to cart')
    } catch (error) {
        res.status(400).send("Error adding to cart")
    }

})

router.put('/', async (req, res) => {
    const { id, productId, quantity } = req.body
    try {
        const user = await User.findById(id)
        const cart = user.cart.map((ct) => {
            if (ct.productId !== productId)
                return ct
            else {
                return { productId, quantity }
            }
        })
        const upduser = await User.findByIdAndUpdate(
            id,
            { $set: { cart } },
            { new: true, runValidators: true }

        )
        res.status(200).send(upduser.cart)
    } catch (error) {
        res.status(400).send(`Some error occured: ${error}`)
    }

})

router.delete('/:id/:productId', async (req, res) => {
    // console.log('Came here')
    
    const { id, productId } = req.params
    console.log(id," ",productId)
    try {
        const user = await User.findById(id)
        const cart = user.cart.filter(ct => ct.productId !== parseInt(productId))
        const upduser = await User.findByIdAndUpdate(
            id,
            { $set: { cart } },
            { new: true, runValidators: true }

        )
        // console.log(cart)
        res.status(200).send(upduser.cart)
    } catch (error) {
        res.status(400).send(`Some error occured: ${error}`)
    }

})

module.exports = router