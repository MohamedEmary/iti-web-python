import { useParams } from 'react-router-dom';

const TodoDetails = ({ todos }) => {
  const { id } = useParams();
  const todo = todos.find(t => t.id === parseInt(id));

  if (!todo) {
    return <div>Todo not found!</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Todo Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{todo.title}</h5>
          <p className="card-text">Status: {todo.completed ? 'Completed' : 'Pending'}</p>
          <p className="card-text">Description: {todo.description || 'No description provided'}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoDetails;