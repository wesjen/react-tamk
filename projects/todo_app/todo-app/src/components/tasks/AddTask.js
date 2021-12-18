import { useEffect, useState } from "react";

function AddTask(props) {
  const tasksURL = "http://localhost:3010/tasks/";
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    date: "",
    tag: "",
    tagColor: "",
  });

  useEffect(() => {
    const getTaskDB = async () => {
      let tasks = await fetchTasks();
      setTodos(tasks);
    };

    getTaskDB();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    let tasks = await fetch(tasksURL);
    return tasks.json();
  };

  // Add Task
  const addTask = async (task) => {
    let added = await fetch(tasksURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    let data = await added.json();

    setTodos([...todos, data]);

    added.status === 201 ? successfullPost() : failedPost();
  };

  const inputChanged = (event) => {
    setNewTask({ ...newTask, [event.target.id]: event.target.value });
  };

  const nullNewTask = () => {
    setNewTask({
      title: "",
      description: "",
      date: "",
      tag: "",
      tagColor: "",
    });
  };

  const successfullPost = () => {
    nullNewTask();
    alert("Task added successfully!");
  };

  const failedPost = () => {
    nullNewTask();
    alert("Couldn't add task");
  };

  const addAndSubmit = async (e) => {
    e.preventDefault();

    addTask(newTask);
  };

  // addTask({
  //   title: e.target.name.title,
  //   description: e.target.name.description,
  //   date: e.target.name.date,
  //   tag: e.target.name.tag,
  //   tagColor: e.target.name.tagColor,
  // });

  // <label for="fname">First name:</label><br>
  // <input type="text" id="fname" name="fname"><br></br>

  return (
    <div className="add-task-div">
      <form onSubmit={addAndSubmit} className="add-form">
        <label for="title">Title of the task</label>
        <input
          type="text"
          id="title"
          value={newTask.title}
          required
          onChange={inputChanged}
        ></input>

        <label for="description">Description of task</label>
        <input
          type="textfield"
          id="description"
          value={newTask.description}
          onChange={inputChanged}
        ></input>

        <label for="date">Date for the task</label>
        <input
          type="date"
          id="date"
          value={newTask.date}
          onChange={inputChanged}
        ></input>

        <label for="tag">Tag for task</label>
        <input
          type="text"
          id="tag"
          value={newTask.tag}
          onChange={inputChanged}
        ></input>

        <label for="tagColor">Color for this task</label>
        <input
          type="text"
          id="tagColor"
          value={newTask.tagColor}
          onChange={inputChanged}
        ></input>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTask;
