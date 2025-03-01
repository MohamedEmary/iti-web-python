import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onTodoDelete }) => {
  // props type is an object { todos: [], onTodoDelete: () => {} }

  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onTodoDelete={onTodoDelete} />
      ))}
    </>
  );
};

export default TodoList;
