import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

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

  const classTag = () => "task-container ${}";

  // TODO : ICONS
  return (
    <div className={`task-container ${task.tag}`}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.date} </p>
      <p>{task.tag} </p>
      <AiOutlineClose
        style={{ color: "red", cursor: "pointer" }}
        onClick={removeTask}
      />
      <button>Done</button>
    </div>
  );
}

export default Task;
