function Counter({ count, onIncrease, onDecrease }) {
  return (
    <div className="container mt-5 text-center">
      <h2>Current Count: {count}</h2>
      <div className="mt-4">
        <button 
          className="btn btn-success mx-2" 
          onClick={onIncrease}
        >
          Increase
        </button>
        <button 
          className="btn btn-danger mx-2" 
          onClick={onDecrease}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default Counter;