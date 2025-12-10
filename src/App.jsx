import Dropdown from "./components/Dropdown";
import Counter from "./components/Counter";
import SearchFilter from "./components/SearchFilter";
import Tabs from "./components/Tabs";
import { ToDoList } from "./components/TodoList";
import { ProductCard } from "./components/ProductCard";
import "./App.css";

function App() {
  const products = [
    { id: 1, title: "iPhone 16", price: 999 },
    { id: 2, title: "AirPods Max", price: 549 },
  ];

  return (
    <div>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default App;
