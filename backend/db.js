const mongoose=require("mongoose");
const { boolean } = require("zod");
//mongodb+srv://piyushnaula008:RDmJDgnhStB9fwQt@cluster0.k0st4sx.mongodb.net/TODOs

mongoose.connect("mongodb+srv://piyushnaula008:RDmJDgnhStB9fwQt@cluster0.k0st4sx.mongodb.net/todos");
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean

});

const todo=mongoose.model('todos',)

module.exports=todo;