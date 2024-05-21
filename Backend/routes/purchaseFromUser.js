const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Purchase = require('../models/purchase')
const User = require('../models/usermodel')
const sendMail = require('../Helper/Nodemailer')




router.post('/', async (req, res) => {
    const { id, productId, title, quantity } = req.body
    try {
        const collectionName = 'products';

        const db = mongoose.connection.db;
        const collection = db.collection(collectionName);


        // id = parseInt(id)
        const result = await collection.find({ 'id': productId });
        let product = await result.toArray();
        if (!product[0]) {
            res.status(400).send('Product not found')
            return
        }

        const purchaseit = await Purchase.create({
            productId,
            quantity,
            title,
            'totalPrice': quantity * product[0].price,
            'customerId': id
        })
        const user = await User.findById(id)
        let previousOrders = user.previousOrders
        previousOrders.push({
            purchaseId: purchaseit.id,
            productId,
            quantity,
            totalPrice: purchaseit.totalPrice,
            date: purchaseit.date
        })

        let updatedUser = await User.findByIdAndUpdate(
            id,
            { $set: { previousOrders } },
            { new: true, runValidators: true }

        )
        sendMail({ name: user.name, email: user.email }, 1, {
            quantity,
            name:title,
            'price': quantity * product[0].price,
        })



        res.status(200).send('Order has been confirmed!')
        // res.send(user)


    } catch (error) {
        res.send(error)
    }

})

module.exports = router