import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoDetails from "./components/TodoDetails";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (title, description) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title,
        description,
        completed: false,
      },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Todo App</h1>
                <TodoForm addTodo={addTodo} />

                <div className="btn-group mb-4">
                  <button
                    className={`btn ${
                      filter === "all" ? "btn-primary" : "btn-outline-primary"
                    }`}
                    onClick={() => setFilter("all")}>
                    All
                  </button>
                  <button
                    className={`btn ${
                      filter === "inProgress"
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => setFilter("inProgress")}>
                    In Progress
                  </button>
                  <button
                    className={`btn ${
                      filter === "completed"
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => setFilter("completed")}>
                    Completed
                  </button>
                </div>

                <TodoList
                  todos={todos}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  filter={filter}
                />
              </>
            }
          />
          <Route path="/todo/:id" element={<TodoDetails todos={todos} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
