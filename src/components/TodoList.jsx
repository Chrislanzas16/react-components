import { useState } from "react";

export const ToDoList = () => {
  const [inputValue, setInputvalue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        text: inputValue,
        completed: false,
      },
    ]);
    setInputvalue("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h2>ToDo list</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add item here..."
          value={inputValue}
          onChange={(e) => setInputvalue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <span
              onClick={() => handleCompleted(item.id)}
              style={{
                cursor: "pointer",
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
