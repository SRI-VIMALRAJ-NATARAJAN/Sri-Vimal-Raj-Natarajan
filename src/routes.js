const express = require('express');
const router = express.Router()


app.get("/",(req,res)=>{

    res.send('Get All Products')
})

app.post("/",(req,res)=>{

    res.send('Save All Products')
})

app.patch("/",(req,res)=>{

    res.send('Update All Products')
})

app.delete("/",(req,res)=>{

    res.send('Delete All Products')
})

module.exports = router;