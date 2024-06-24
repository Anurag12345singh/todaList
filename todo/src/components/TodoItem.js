import React, { useState } from 'react';
import { TiDelete } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newTask);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="d-flex justify-content-between align-items-center bg-secondary rounded p-3 mb-2">
      {isEditing ? (
        <input
          type="text"
          className="form-control"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <div>
          <h5 className="m-0">{todo.task}</h5>
          <small>{todo.date}</small>
        </div>
      )}
      <div>
        <button className="btn btn-danger me-2" onClick={() => deleteTodo(todo.id)}>
          <i className="bi bi-x-lg"><TiDelete style={{height:"30px", width:"30px"}}/></i>
        </button>
        <button className="btn btn-primary" onClick={handleEdit}>
          <i className="bi bi-pencil"><AiFillEdit style={{height:"30px", width:"30px"}}/></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;