const express = require("express")
const { createTodo, updateTodos } = require("./types")
const { todo } = require("./db")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
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
    res.json({
        message: "Todo Created!"
    })

})
app.get("/todos", async function (req, res) {
    const alltodos = await todo.find({})
    res.json({ alltodos })
})
app.put("/completed", async function (req, res) {
    const updatePayload = req.body     // give Id
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

app.listen(3000)

