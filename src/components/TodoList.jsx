import { useState } from "react";

export const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!inputValue.trim()) return; // Prevent adding empty tasks
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: inputValue, completed: false },
    ]); // Pass the input value to a function that adds the task
    setInputValue(""); // Clear the input field after adding
  };

  function deleteItem(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h2>ToDo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new item..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <span
              onClick={() => toggleComplete(item.id)}
              style={{
                cursor: "pointer",
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
