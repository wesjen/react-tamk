import React, { useEffect, useState } from "react";
import Task from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function TaskList(props) {
  const tasksURL = `https://react-todo-app-tamk.herokuapp.com/api`;
  const [todos, setTodos] = useState([]);

  // Fetch tasks from server
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

  // Update a task
  const updateTask = async (id, editableAtt) => {
    let newTodo = todos.filter((task) => task.id === id);
    let newTask = newTodo[0];

    const edit = async () => {
      // Alert if editing successful
      const successfullPost = () => {
        alert("Task edited successfully!");
      };

      // Alert if editing failed
      const failedPost = () => {
        alert("Couldn't edit task");
      };

      let res = await fetch(tasksURL + id, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      res.status === 200 ? successfullPost() : failedPost();
    };

    switch (editableAtt) {
      case "title":
        newTask.title = prompt("Insert new title");
        edit();
        break;
      case "description":
        newTask.description = prompt("Insert new description");
        edit();
        break;
      case "date":
        newTask.date = prompt("Insert new date");
        edit();
        break;
      case "tag":
        newTask.tag = prompt("Insert new tag");
        edit();
        break;
      default:
        alert("No editable attributes");
    }
  };

  // Fetch Tasks
  const fetchTasks = async () => {
    let tasks = await fetch(tasksURL);
    return tasks.json();
  };

  const dragEnd = (result) => {
    const { destination, source } = result;

    // Error catching
    if (!destination) {
      return;
    }

    // Error catching
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let obj = todos[source.index];
    console.log(obj);
    todos.splice(source.index, 1);
    todos.splice(destination.index, 0, obj);
  };

  // LISTS ALL TASKS
  return (
    <div className="task-list-div" key={Math.random()}>
      <h1>Tasks</h1>
      <DragDropContext onDragEnd={dragEnd}>
        <table className="task-list-container">
          <Droppable droppableId="table">
            {(provided) => (
              <tbody ref={provided.innerRef} {...provided.droppableProps}>
                {todos.map((task, index) => (
                  <Task
                    index={index}
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    date={task.date}
                    tag={task.tag}
                    tagColor={task.tagColor}
                    delete={removeTask}
                    update={updateTask}
                  />
                ))}
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
        </table>
      </DragDropContext>
    </div>
  );
}

export default TaskList;
