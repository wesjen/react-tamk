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

  // Removes task
  const removeTask = () => setTask({ ...task, removed: true });

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
          onClick={removeTask}
        />
        <AiOutlineCheck
          style={{ color: "green", cursor: "pointer", size: "2em" }}
        />
      </div>
    </div>
  );
}

export default Task;
