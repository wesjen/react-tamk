import React, { useState } from "react";
import Task from "./Task";

function TaskList() {
  // TODO : ARRAY OR USESTATE FOR TASK-OBJECTS

  const makeRows = () => {
    let returnableRows;
    // TODO: For loop for getting all the task objects
    return returnableRows;
  };

  // LISTS ALL TASKS
  return (
    <table>
      <tbody>{makeRows}</tbody>
    </table>
  );
}

export default TaskList;
