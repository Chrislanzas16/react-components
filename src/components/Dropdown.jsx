import { useState } from "react";


export default function Dropdown() {
  const [open, setIsOpen] = useState(false)
  return (
    <div>
      <button onClick={()=> setIsOpen(!open)}>Show Dropdown</button>

      {open && (
        <ul style={{ border: "1px solid #ccc", padding: 20 }}>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
}
