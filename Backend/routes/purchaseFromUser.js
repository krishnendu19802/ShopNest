const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Purchase = require('../models/purchase')
const User = require('../models/usermodel')
const sendMail = require('../Helper/Nodemailer')




router.post('/', async (req, res) => {
    const { id, productId, title, quantity,deliveryCharge } = req.body
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
            deliveryCharge,
            'totalPrice': Number(quantity * product[0].price)+Number(deliveryCharge),
            'customerId': id
        })
        const user = await User.findById(id)
        let previousOrders = user.previousOrders
        previousOrders.push({
            purchaseId: purchaseit.id,
            productId,
            quantity,
            title,
            deliveryCharge,
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
            'price': Number(quantity * product[0].price)+Number(deliveryCharge),
        })



        res.status(200).send('Order has been confirmed!')
        // res.send(user)


    } catch (error) {
        console.log(error)
        res.send(error)
    }

})

router.post('/getitems',async(req,res)=>{
    const {id}=req.body
    try {
        const user=await User.findById(id)
        if(!user){
            res.status(400).send('User not found')
            return
        }
        res.status(200).send(user.previousOrders)

    } catch (error) {
        res.status(400).send(`Error: ${error}`)
    }
})

module.exports = router