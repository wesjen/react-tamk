import React, { useEffect, useState } from "react";
import Task from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

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

  // Fetch Tasks
  const fetchTasks = async () => {
    let tasks = await fetch(tasksURL);
    return tasks.json();
  };

  // // Make the rows to show all rows
  // const makeRows = () => {
  //   let returnableRows = [];

  //   for (let task of todos) {
  //     returnableRows.push(
  //       <Task
  //         key={task.id}
  //         id={task.id}
  //         title={task.title}
  //         description={task.description}
  //         date={task.date}
  //         tag={task.tag}
  //         tagColor={task.tagColor}
  //         delete={removeTask}
  //       />
  //     );
  //   }
  //   return returnableRows;
  // };

  const dragEnd = (result) => {
    const addTask = async (task) => {
      let added = await fetch(tasksURL, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      let data = await added.json();

      setTodos([...todos, data]);
    };

    const { destination, source, draggableId } = result;
    // let tmpArr = todos;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let obj = todos[source.index];
    console.log(obj);
    let newTaskID = Array.from(obj.id);
    newTaskID.splice(source.index, 1);
    newTaskID.splice(destination.index, 0, draggableId);

    let newRow = {
      ...todos,
      index: newTaskID,
    };

    addTask(newRow);

    // console.log(todos);

    // setTodos(newRow);
    // console.log(todos);
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
