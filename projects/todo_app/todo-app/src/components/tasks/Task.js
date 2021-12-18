import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Task(props) {
  const [task, setTask] = useState({
    title: props.title,
    description: props.description,
    date: props.date,
    tag: props.tag,
    tagColor: props.tagColor,
  });

  // TODO : ICONS
  return (
    <tr className={`task-container ${task.tagColor}`}>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.date}</td>
      <td className="task-tags">{task.tag}</td>
      <td>
        <AiOutlineClose
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => props.delete(props.id)}
        />
      </td>
      <td>
        <input type="checkbox"></input>
      </td>
    </tr>
  );
}

export default Task;

/*

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

*/
