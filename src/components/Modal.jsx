import { useEffect, useState } from "react";
import { useRef } from "react";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef()


useEffect(()=>{
 function onClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
},[])

  return (
    <div ref={modalRef}>
      <button onClick={() => setIsOpen(!isOpen)}>{!isOpen ? "Modal" : "x"}</button>
      <div>
        {isOpen && (
          <>
            <h2>Modal</h2>
            <li>Home</li>
            <li>Settings</li>
            <li>Contact</li>
          </>
        )}
      </div>
    </div>
  );
};
