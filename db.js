const express = require('express')
const mongoose = require('mongoose')

const app = express();

app.listen(2000, ()=>{
    console.log("listen in 2000")

})

app.get('/',(req,res)=>{
    console.log("Hai Welocome")
    res.send("HAi")
})

app.get('/admin',(req,res)=>{
    console.log("Hai Welocome admin")
    res.send("HAi admin")
})


mongoose.connect('mongodb://localhost:27017/ragu');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('connect connect'));