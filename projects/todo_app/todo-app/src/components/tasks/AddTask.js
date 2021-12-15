function AddTask(props) {
  const addAndSubmit = (e) => {
    e.preventDefault();

    props.addTask({
      title: "Test add",
      description: "Test description",
      date: "0202-01-03",
      tag: "TestTag",
    });
  };

  return (
    <div className="add-task-div">
      <form onSubmit={addAndSubmit}>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTask;
