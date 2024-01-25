const express = require("express");
const { createTodo, updateTodo } = require("./type");
const todo = require("./db");
const app = express();
app.use(express.json());

// Post the Todo
app.post("/todo", async function (req, res) {
    const payload = req.body; // Fix variable name
    const parse = createTodo.safeParse(payload);
    if (!parse.success) {
        res.status(411).json({
            msg: "you sent the wrong format",
        });
        return;
    }
    // Put in mongodb
    await todo.create({
        title: payload.title,
        description: payload.description,
        completed: false,
    });
    res.json({
        msg: "created TODO successfully!!",
    });
});

// Get the Todo
app.get("/todo", async function (req, res) {
    const todos = await todo.find({});
    res.json({
        todos,
    });
});

// Put Completion
app.post("/completed", async function (req, res) {
    const updating = req.body; // Fix variable name
    const parseid = updateTodo.safeParse(updating);
    if (!parseid.success) {
        res.status(404).json({
            msg: "id not found!!",
        });
        return;
    }
    // Update in mongodb using updateOne
    await todo.updateOne(
        { _id: req.body.id }, // Provide the correct filter condition
        { completed: true }
    );
    res.json({
        msg: "task completed successfully!!",
    });
});

app.listen(3000);
