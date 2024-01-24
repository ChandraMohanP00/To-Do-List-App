import React, { useState } from 'react';

const ListInput = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleAddTask = () => {
    const newTask = { id: Date.now(), name: task, priority };
    setTasks([...tasks, newTask]);
    setTask('');
    setPriority('Low');
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Group tasks by priority
  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.priority]) {
      acc[task.priority] = [];
    }
    acc[task.priority].push(task);
    return acc;
  }, {});

  return (
    <div>
      <h1 className="mt-4 mb-4">Priority To-Do List App</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a new task"
          className="form-control mb-2"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select
          className="form-control mb-2"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
        <button className="btn btn-primary" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <div className="mb-4">
        <div className="row">
          <div className="col-md-4">
            <h4>Low Priority</h4>
            {groupedTasks['Low'] &&
              groupedTasks['Low'].map((task) => (
                <div key={task.id} className="card mb-3">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <p className="card-title">{task.name}</p>
                    <button className="btn btn-danger" onClick={() => handleDeleteTask(task.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="col-md-4">
            <h4>Medium Priority</h4>
            {groupedTasks['Medium'] &&
              groupedTasks['Medium'].map((task) => (
                <div key={task.id} className="card mb-3">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <p className="card-title">{task.name}</p>
                    <button className="btn btn-danger" onClick={() => handleDeleteTask(task.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="col-md-4">
            <h4>High Priority</h4>
            {groupedTasks['High'] &&
              groupedTasks['High'].map((task) => (
                <div key={task.id} className="card mb-3">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <p className="card-title">{task.name}</p>
                    <button className="btn btn-danger" onClick={() => handleDeleteTask(task.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListInput;
