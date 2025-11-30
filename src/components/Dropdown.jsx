import { useEffect, useRef, useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <button onClick={() => setOpen(!open)}>Menu</button>
      {open && (
        <ul>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
}
