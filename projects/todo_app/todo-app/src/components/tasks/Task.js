import React, { useState } from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

function Task(props) {
  const [task, setTask] = useState({
    title: props.title,
    description: props.description,
    date: props.date,
    tag: props.tag,
    done: props.done,
  });

  // TODO : ICONS
  return (
    <div className={`task-container ${task.tag}`}>
      <div className="task-items">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>{task.date} </p>
        <p className="task-tags">{task.tag} </p>
      </div>
      <div className="task-icons">
        <AiOutlineClose
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => props.delete(props.id)}
        />
        <input type="checkbox"></input>
      </div>
    </div>
  );
}

export default Task;
