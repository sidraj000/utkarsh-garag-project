const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');
const cors = require('cors');
router.use(cors());


router.get('/send',(req,res)=>{
  // const newItem=new Item({
  //     userId: req.body.userId,
  //     convFactor:req.body.convFactor,
  //     price:req.body.price,
  // });
  // newItem.price=newItem.price/newItem.convFactor;
  // newItem.save().then(item=>res.json({status: "success",reportID: "949832f8-48c7-4cb2-8dcd-98f046a9a2e3"}));
  res.send({status: "success",reportID: "949832f8-48c7-4cb2-8dcd-98f046a9a2e3"})

});

router.post('/reports',(req,res)=>{
    // const newItem=new Item({
    //     userId: req.body.userId,
    //     convFactor:req.body.convFactor,
    //     price:req.body.price,
    // });
    // newItem.price=newItem.price/newItem.convFactor;
    // newItem.save()
    // .then(item=>res.json({status: "success",reportID: "949832f8-48c7-4cb2-8dcd-98f046a9a2e3"}));
    // const newTable=newTable()
    // {
    //   'cmdtyName'
    //   price:average
    //   id:''
    // }
    return({status: "success",reportID: newTable.id})

});

// router.delete('/:id',(req,res)=>{
//   console.log("trying to delete");
//   Item.findById(req.params.id)
//    .then(item => item.remove()
//    .then(()=> res.json({success:true})))
//    .catch(err => res.status(404).json({success:false}));
// });

module.exports = router;