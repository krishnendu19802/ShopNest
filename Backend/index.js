const express = require('express')
const mongoose = require('mongoose')
const app = express()
const products=require('./routes/products')
const createorupdateuser=require('./routes/createOrUpdateUser.js')
const addcart=require('./routes/addcart.js')
const login=require('./routes/login.js')
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

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

app.use('/products',products)
app.use('/createuser',createorupdateuser)
app.use('/addcart',addcart)
app.use('/login',login)

