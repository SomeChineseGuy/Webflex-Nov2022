import logo from './logo.svg';
import './App.css';
import TodoListItem from './components/TodoListItem';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import axios from 'axios';

// const todos = [
//    {
//     id: 'abc',
//     task: 'Clean the cat',
//     isCompleted: false
//   },
// ]

function App() {
  const [todo, setTodo] =useState([])
  useEffect(() =>{
    axios.get('/todos')
    .then(res => {
      console.log(res);
      setTodo(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <div className="App">
      <h1>Hello everyone!</h1>
      <TodoList todos={todo}/>
    </div>
  );
}

export default App;
