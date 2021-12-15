import React, { useEffect, useState } from "react";
import Task from "./Task";

function TaskList(props) {
  let uniqueID = 0;
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTaskDB = async () => {
      let tasks = await fetchTasks();
      setTodos(tasks);
    };

    getTaskDB();
  }, []);

  // Remove task
  const removeTask = async (id) => {
    let del = await fetch(`http://localhost:3010/tasks/${id}`, {
      method: "DELETE",
    });
    del.status === 200
      ? setTodos(todos.filter((todo) => todo.id !== id))
      : alert("Error with deleting task");
  };

  // Add Task
  const addTask = async (task) => {
    let added = await fetch("http://localhost:3010/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    let data = await added.json();

    setTodos([...todos, data]);
  };

  // Fetch Tasks
  const fetchTasks = async () => {
    let tasks = await fetch("http://localhost:3010/tasks");
    return tasks.json();
  };

  // Make the rows to show all rows
  const makeRows = () => {
    let returnableRows = [];

    for (let task of todos) {
      returnableRows.push(
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          date={task.date}
          tag={task.tag}
          done={task.done}
          delete={removeTask}
        />
      );
    }
    return returnableRows;
  };

  // LISTS ALL TASKS
  return (
    <div class="task-list-container" key={Math.random()}>
      {makeRows()}
    </div>
  );
}

export default TaskList;
