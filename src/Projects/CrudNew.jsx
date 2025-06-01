import React, { useState } from "react";

const CrudNew = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTodoList([...todoList, newTask]);
      setNewTask("");
    }
  };

  const updateTask = () => {
    const updatedList = [...todoList];
    updatedList[editIndex] = newTask;
    setTodoList(updatedList);
    setNewTask("");
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleDelete = (indexToDelete) => {
    const updatedList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(updatedList);
  };

  const handleEdit = (index) => {
    setNewTask(todoList[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Enter your task"
        />
        <button onClick={isEditing ? updateTask : addTask}>
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </div>

      <div className="list">
        {todoList.map((task, index) => (
          <div key={index}>
            <h2>{task}</h2>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrudNew;
