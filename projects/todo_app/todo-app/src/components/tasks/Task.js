import React, { useState } from "react";

function Task(props) {
  const [task, setTask] = useState({
    title: "This is Title!",
    description: "Here comes description",
    date: "Reserved for date",
    tag: "Tag comes in here!",
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
