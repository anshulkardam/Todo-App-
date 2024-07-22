const express = require("express")
const { createTodo, updateTodos } = require("./types")
const { todo } = require("./db")
const app = express()
app.use(express.json())

app.post("/todo", async function (req, res) {

    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            message: "You sent the Wrong Inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

})
app.get("/todos", async function (req, res) {
    const alltodos = await todo.find({})
    res.json({ alltodos })
})
app.put("/completed", function (req, res) {
    const updatePayload = req.body
    const parsedPayload = updateTodos.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            message: "You sent the Wrong Inputs"
        })
        return;
    }

    await todo.updateOne({
        _id: req.body.id
    },
        { completed: true })

    res.json ({
        message:"Todo is Marked as Done!"
    })
})



