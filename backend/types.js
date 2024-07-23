const zod = require("zod")


const createTodo = zod.object({

        title: zod.string().min(2),
        description : zod.string().min(1)
})

const updateTodos = zod.object({

    id: zod.string(),
})

module.exports = {
        createTodo,
        updateTodos
}