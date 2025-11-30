import { useState } from "react";

export default function Tabs() {
  const [active, setActive] = useState("home");

  return (
    <div>
      <ul>
        <button
          onClick={() => setActive("home")}
          style={{ fontWeight: active === "home" ? "bold" : "normal" }}
        >
          Home
        </button>
        <button
          onClick={() => setActive("profile")}
          style={{ fontWeight: active === "profile" ? "bold" : "normal" }}
        >
          Profile
        </button>
        <button
          onClick={() => setActive("settings")}
          style={{ fontWeight: active === "settings" ? "bold" : "normal" }}
        >
          Settings
        </button>
      </ul>

      {active === "home" && <h2>This is Home Page</h2>}
      {active === "profile" && <h2>This is Profile Page</h2>}
      {active === "settings" && <h2>This is Settings Page</h2>}
    </div>
  );
}
