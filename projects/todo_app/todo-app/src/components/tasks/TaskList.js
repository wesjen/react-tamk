import React, { useEffect, useState } from "react";
import Task from "./Task";
// import AddTask from "./AddTask";

function TaskList(props) {
  const tasksURL = "http://localhost:3010/tasks/";
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
    let del = await fetch(tasksURL + id, {
      method: "DELETE",
    });
    del.status === 200
      ? setTodos(todos.filter((todo) => todo.id !== id))
      : alert("Error with deleting task");
  };

  // // Add Task
  // const addTask = async (task) => {
  //   let added = await fetch(tasksURL, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(task),
  //   });

  //   let data = await added.json();

  //   setTodos([...todos, data]);
  // };

  // Fetch Tasks
  const fetchTasks = async () => {
    let tasks = await fetch(tasksURL);
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
          tagColor={task.tagColor}
          delete={removeTask}
        />
      );
    }
    return returnableRows;
  };

  // LISTS ALL TASKS
  return (
    <div className="task-list-div" key={Math.random()}>
      <h1>Tasks</h1>
      <table className="task-list-container">
        <tbody>{makeRows()}</tbody>
      </table>
    </div>
  );
}

export default TaskList;
