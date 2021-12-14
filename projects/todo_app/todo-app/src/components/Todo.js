import React, { useState } from "react";
import Home from "./interfaces/Home";
import Info from "./interfaces/Info";
import "./Todo.css";

function ToDo() {
  const [activeInterface, setActiveInterface] = useState();

  // TASKS
  // NÄKYMÄVALITSIN
  // VALIKKO

  function changeInterface(clickedIF) {
    setActiveInterface(clickedIF);
  }

  return (
    <div>
      <div class="menu-bar">
        <button onClick={() => changeInterface(<Home />)}>Home</button>
        <button onClick={() => changeInterface(<Info />)}>Info</button>
      </div>
      {activeInterface}
    </div>
  );
}

export default ToDo;
