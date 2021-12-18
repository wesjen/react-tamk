import React, { useState } from "react";
import Home from "./interfaces/Home";
import Info from "./interfaces/Info";
import AddTask from "./tasks/AddTask";
import "./Todo.css";

function ToDo() {
  const [activeInterface, setActiveInterface] = useState();

  // TASKS
  // NÄKYMÄVALITSIN
  // VALIKKO

  const changeInterface = (clickedIF) => setActiveInterface(clickedIF);

  return (
    <div>
      <div className="menu-bar">
        <button onClick={() => changeInterface(<Home />)}>Home</button>
        <button onClick={() => changeInterface(<AddTask />)}>Add new +</button>
        <button onClick={() => changeInterface(<Info />)}>Info</button>

        {/*<button onClick={() => changeInterface(<AddTask />)}>Add +</button> */}
        {/* TODO: ADD ICON FOR ADD ? */}
      </div>
      {activeInterface}
    </div>
  );
}

export default ToDo;
