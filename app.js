const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items=require('./routes/api/items');
const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

// //DB config
// const db=require('./config/key').mongoURI;

app.use('/api',items);

app.get('/',(req,res)=>{
  // const newItem=new Item({
  //     userId: req.body.userId,
  //     convFactor:req.body.convFactor,
  //     price:req.body.price,
  // });
  // newItem.price=newItem.price/newItem.convFactor;
  // newItem.save().then(item=>res.json({status: "success",reportID: "949832f8-48c7-4cb2-8dcd-98f046a9a2e3"}));
  // return({status: "success"})
  res.send("hello")

});

// mongoose
//   .connect(db,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
//   .then(()=>console.log('MongoDB connected'))
//   .catch(err => console.log(err));

const port= process.env.PORT || 5000;

app.listen(port, () =>console.log(`Server started on port ${port}`));