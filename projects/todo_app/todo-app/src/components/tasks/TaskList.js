import React, { useState } from "react";

function TaskList() {
  const [todos, setTodos] = useState([]);

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
