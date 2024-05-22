const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')


router.post('/', async (req, res) => {
    const {category}=req.body
    const collectionName = 'products';
    // console.log(category)
    const db = mongoose.connection.db;
    const collection = db.collection(collectionName);

    // console.log(collection)
    const result = await collection.find({category});
    const products = await result.toArray();
    
    res.status(200).send(products)
})

router.get('/:id', async (req, res) => {
    const collectionName = 'products';

    const db = mongoose.connection.db;
    const collection = db.collection(collectionName);
    let { id } = req.params

    id = parseInt(id)
    const result = await collection.find({ id });
    const product = await result.toArray();
    res.status(200).send(product[0])
})


module.exports = router