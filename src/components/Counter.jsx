import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(3);
  function handleClick(e) {
    e.preventDefault();
    alert("Yo");
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Holis {count}</button>;
}
