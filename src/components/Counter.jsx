import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = (count => count + 1);
  const decrement = Math.max(0, count => count - 1);

  return <div>
    <h1>Counter: {count}</h1>
    <button onClick={()=>setCount(decrement)}>-</button>
    <button onClick={()=>setCount(increment)}>+</button>
    
  </div>;
}
