const mongoose = require ("mongoose")

mongoose.connect("mongodb+srv://admin:xjuFZMa47XtqKbxw@cluster0.siklzcx.mongodb.net/todos-app")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model('todos', todoSchema);


/* const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
*/

module.exports = {
    todo
}