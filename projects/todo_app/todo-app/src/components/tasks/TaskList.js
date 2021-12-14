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

  // Fetch Tasks
  const fetchTasks = async () => {
    let tasks = await fetch("http://localhost:3010/tasks");
    let data = await tasks.json();

    return data;
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
