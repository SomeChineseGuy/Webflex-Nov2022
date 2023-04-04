const express = require('express');
const morgan = require('morgan');
// const cors = require('cors')
const app = express();
const port = 8001;

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
// app.use(cors())
app.use(express.static('../client/build'))

// Fake DB
const todos = {
  abc: {
    id: 'abc',
    task: 'Walk the dog',
    isCompleted: false
  },
  def: {
    id: 'def',
    task: 'Clean up after the cat',
    isCompleted: true
  }
}

// Browse
app.get('/todos', (req, res) => {
  const arr = Object.values(todos);
  res.json(arr)
})

// Read
app.get('/todos/:id', (req, res) => {
  const todoID = req.params.id;
  const todo = todos[todoID]
  res.json(todo)
})

// Edit
app.post('/todos/:id', (req, res) => {
  const todoID = req.params.id;
  const newTask = req.body.newTask;
  todos[todoID].task = newTask
  console.log(todos);
  res.send("Task has been updated")
})

// Add
app.post('/todos', (req, res) => {
  console.log(req.body.task);
  const task = req.body.task;
  const id = Math.random().toString(36).substring(2, 5)
  // console.log(id);
  // console.log(task);
  todos[id] = {
    id,
    task,
    isCompleted: false
  }
  console.log(todos);
  res.send('Task has been added')
})

// Delete
app.delete('/todos/:id', (req, res) => {
  const todoID = req.params.id;
  delete todos[todoID]
  console.log(todos);
  res.send('The task was deleted')
})

app.get('/', (req, res) => {
  res.send('<h1>Hello everyone! </h1>')
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
})