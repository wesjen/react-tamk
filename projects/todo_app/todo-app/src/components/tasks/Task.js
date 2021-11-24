import React, { useState } from "react";

function Task(props) {
  const [task, setTask] = useState({
    title: props.title,
    description: props.description,
    date: props.date,
    tag: props.tag,
    done: "Is this done or not",
  });

  // TODO : ICONS
  return (
    <div className="task-container">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.date}</p>
      <p>{task.tag}</p>
      <button>Remove</button>
      <button>Done</button>
    </div>
  );
}

export default Task;
