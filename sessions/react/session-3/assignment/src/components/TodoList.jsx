import { Link } from 'react-router-dom';

const TodoList = ({ todos, toggleTodo, deleteTodo, filter }) => {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'inProgress') return !todo.completed;
    return true; // 'all' filter
  });

  return (
    <div>
      {filteredTodos.map((todo) => (
        <div key={todo.id} className="card mb-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="me-2"
              />
              <Link to={`/todo/${todo.id}`} className="text-decoration-none">
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.title}
                </span>
              </Link>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;