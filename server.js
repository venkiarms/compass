// const express = require('express')

// const app = express();

// //Connect
// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/TestDB', (err)=>{
//     if(!err) console.log('db connect')
//     else console.log('not connect')
// })
// //Schema
// const addSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });
// //Collection
// const newModel = new mongoose.model('Data', addSchema);
 
// // insert data
// const data = new newModel({name:'Venki', age: 29})

// // Save the data{name:'venki', age:23}
// data.save()

// // const data = async()=>{

// //     const result = await newModel.insertMany([
// //         {name:'venki', age:23},
// //         {name:'arun', age:23},
// //         {name:'venkatesh', age:23}
        

// //     ])
// //     console.log(result)
// // }

 
// // data();

 
// app.listen(5000, ()=>{
//     console.log("Con in 5000");
// })

// app.get(5000, ()=>{
//     console.log("Con in 5000");
// })

// app.get(2000, ()=>{
//     console.log("Con in 5000");
// })

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/testdb');
 
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const kittySchema = new mongoose.Schema({
    name: String
  });

  const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
