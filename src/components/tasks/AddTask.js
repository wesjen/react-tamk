import { useEffect, useState } from "react";

function AddTask(props) {
  const tasksURL = "https://react-todo-app-tamk.herokuapp.com/";
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    date: "",
    tag: "",
    tagColor: "",
  });

  // Fetch tasks from server
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

  // Null newTask
  const nullNewTask = () => {
    setNewTask({
      title: "",
      description: "",
      date: "",
      tag: "",
      tagColor: "",
    });
  };

  // Alert if successfull post
  const successfullPost = () => {
    nullNewTask();
    alert("Task added successfully!");
  };

  // Alert if posting failed
  const failedPost = () => {
    nullNewTask();
    alert("Couldn't add task");
  };

  // Submit
  const addAndSubmit = async (e) => {
    e.preventDefault();

    addTask(newTask);
  };

  // Return Add task -form
  return (
    <div className="add-task-div">
      <form onSubmit={addAndSubmit} className="add-form">
        <label htmlFor="title">Title of the task</label>
        <input
          type="text"
          id="title"
          value={newTask.title}
          required
          onChange={inputChanged}
          maxLength="50"
        ></input>

        <label htmlFor="description">Description of task</label>
        <input
          type="textfield"
          id="description"
          value={newTask.description}
          onChange={inputChanged}
          maxLength="150"
        ></input>

        <label htmlFor="date">Date for the task</label>
        <input
          type="date"
          id="date"
          value={newTask.date}
          onChange={inputChanged}
        ></input>

        <label htmlFor="tag">Tag for task</label>
        <input
          type="text"
          id="tag"
          value={newTask.tag}
          onChange={inputChanged}
          maxLength="30"
        ></input>

        <label htmlFor="tagColor">Color for this task</label>
        <select id="tagColor" value={newTask.tagColor} onChange={inputChanged}>
          <option value="none">None</option>
          <option value="purple">Purple</option>
          <option value="cyan">Cyan</option>
          <option value="orange">Orange</option>
          <option value="golden">Golden</option>
        </select>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTask;
