import React, { useState } from "react";

function Task(props) {
  const [task, setTask] = useState({
    title: "This is Title!",
    description: "Here comes description",
    date: "Reserved for date",
    done: "Is this done or not",
  });

  return (
    <div className="task-container">
      <button>Done</button>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.date}</p>
      <button>Remove</button>
    </div>
  );
}

export default Task;
