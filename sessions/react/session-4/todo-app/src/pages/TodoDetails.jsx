import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const TodoDetails = () => {
  const [todo, setTodo] = useState();
  const params = useParams();
  const location = useLocation();

  console.log(location.state);

  useEffect(() => {
    if (params.id) {
      const todos = JSON.parse(localStorage.getItem("todos"));
      const selectedTodo = todos.find((todo) => todo.id === +params.id);
      setTodo(selectedTodo);
    }
  }, [params]);

  return (
    <div>
      {todo ? (
        <>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </>
      ) : null}
    </div>
  );
};

export default TodoDetails;
