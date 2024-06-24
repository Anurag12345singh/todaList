import React, { useState } from 'react';
import '../App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import TodoList from './TodoList';
import AddTask from './Addtask';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTodo = (task) => {
    const newTodo = {
      id: Date.now(),
      task,
      date: new Date().toUTCString(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newTask) => {
    const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, task: newTask } : todo);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo => todo.task.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App bg-dark text-white p-5 ">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} editTodo={editTodo} />
      <AddTask addTodo={addTodo} />
    </div>
  );
}

export default Todo;