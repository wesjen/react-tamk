function AddTask(props) {
  const addAndSubmit = (e) => {
    e.preventDefault();

    props.addTaks();
  };

  return (
    <div className="add-div">
      <form onSubmit={addAndSubmit}>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTask;
