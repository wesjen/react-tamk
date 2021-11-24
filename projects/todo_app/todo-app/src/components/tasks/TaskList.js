import React, { useState } from "react";
import Task from "./Task";

function TaskList(props) {
  let uniqueID = 0;
  let todos = [
    <Task
      id={++uniqueID}
      title="Wash the dishes"
      description="Wash them propely"
      date="2021-4-8"
      tag="Chores"
      done="false"
    />,
    <Task
      id={++uniqueID}
      title="Walk the dog"
      description="10 km"
      tag="Exercise"
      done="done"
    />,
    ,
  ];
  // TODO : ARRAY OR USESTATE FOR TASK-OBJECTS

  // Add the tasks§
  const makeRows = () => {
    let returnableRows = [];
    // // TODO: For loop for getting all the task objects
    for (let task of todos) {
      returnableRows.push(
        <tr>
          <td>{task}</td>
        </tr>
      );
    }
    return returnableRows;
  };

  const newTodo = () => {
    let tmp = new Task(props.title, props.description, props.date);
    todos.push(tmp);
  };

  // LISTS ALL TASKS
  return (
    <div class="task-list-container">
      <table>
        <tbody>{makeRows()}</tbody>
      </table>
    </div>
  );
}

export default TaskList;
