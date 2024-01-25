const express =require("express");
const { createTodo, updateTodo } = require("./type");
const todo = require("./db");
const app=express();
app.use(express.json);

//Post the Todo
app.post("/todo",async function(req,res){
    const payload=res.body;
    const parse=createTodo.safeParse(payload);
    if(!parse.success){
        res.status(411).json({
            msg:"you sent the wrong format"
        })
        return;
    }
    //put in mongodb
    await todo.create({
        title:payload.title,
        description:payload.description,
        completed:false
    })
    res.json({
        msg:"created TODO successfully!!"
    })
})

//Get the Todo

app.get("/todo",async function(req,res){
    const todos=await todo.find({});
    res.json({
        todos
    })
})


//Put Complition

app.post("/completed",async function(req,res){
    const updating=re.body;
    const parseid=updateTodo.safeParse(updating);
    if (!parseid.success){
        res.status(404).json({
            msg:"id not found!!"
        })
        return;
    }
    //updare in mongodb
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"task completed successfully!!"
    })
})
