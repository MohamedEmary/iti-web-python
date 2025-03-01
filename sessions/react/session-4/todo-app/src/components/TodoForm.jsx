import React, { useState } from "react";

const TodoForm = (props) => {
  // props = {onAddTodo: () => {}}

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const passTodoToApp = () => {
    if(title) {
      const obj = {
        title: title,
        description: description,
        id: Date.now(),
        completed: false,
      };
      props.onAddTodo(obj);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="title">Enter Todo Title</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div className="form-group mt-3">
        <label htmlFor="description">Enter Todo Description</label>
        <textarea
          rows={6}
          id="description"
          className="form-control"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      <div className="d-flex justify-content-center">
        <button
          className="btn btn-success px-5 fs-4 mt-3"
          onClick={passTodoToApp}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
