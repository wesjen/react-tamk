import React, { useState } from "react";
import TaskList from "./tasks/TaskList";
import Info from "./interfaces/Info";
import AddTask from "./tasks/AddTask";
import "./Todo.css";

function ToDo() {
  const [activeInterface, setActiveInterface] = useState();

  const changeInterface = (clickedIF) => setActiveInterface(clickedIF);

  return (
    <div>
      <div className="menu-bar">
        <button onClick={() => changeInterface(<TaskList />)}>Home</button>
        <button onClick={() => changeInterface(<AddTask />)}>Add new +</button>
        <button onClick={() => changeInterface(<Info />)}>Info</button>
      </div>
      {activeInterface}
    </div>
  );
}

export default ToDo;
