const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')


router.get('/', async (req, res) => {

    const collectionName = 'products';

    const db = mongoose.connection.db;
    const collection = db.collection(collectionName);

    const result = await collection.find({});
    const products = await result.toArray();
    res.status(200).send(products)
})

router.post('/:id', async (req, res) => {
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