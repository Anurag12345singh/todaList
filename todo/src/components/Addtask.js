import React, { useState } from 'react';

const AddTask = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-success" type="submit">
          <i className="bi bi-plus">Add Task</i>
        </button>
      </div>
    </form>
  );
};

export default AddTask;