const express = require('express')
const mongoose = require('mongoose')
const app = express()
const products=require('./routes/products')

const port = 8000

mongoose.connect('mongodb://127.0.0.1:27017/wowstore')
  .then(() => {
    console.log('connected successfully');
    // console.log('All products:', products);
    app.listen(port,()=>{
        console.log(`App listening on port ${port}`)
    })
  })
  .catch((error) => {
    console.error('Error:', error);
  });

app.use('/',products)
