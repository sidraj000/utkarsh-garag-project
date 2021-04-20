const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ItemSchema = new Schema({
    userId : {
        type:String,
        required: true
    },
    marketId:
    {
        type:String,
        required:true
    },
    marketName:
    {
        type:String,
        required:true
    },
    cmdtyId:
    {
        type:String,
        required:true
    },
    cmdtyName:{
        type:String,
        required:true
    },
    priceUnit:{
        type:String,
        required:true
    },
    convFactor:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

});

module.exports = Item = mongoose.model('item',ItemSchema);