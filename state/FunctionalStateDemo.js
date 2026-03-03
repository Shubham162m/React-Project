import React, { useState } from "react";

function FunctionalStateDemo() {

  // 1. Basic Counter State
  const [count, setCount] = useState(0);

  // 2. Multiple States
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  // 3. Object State
  const [user, setUser] = useState({
    age: 20,
    city: "Ahmedabad"
  });

  // Increment
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Decrement
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Toggle visibility
  const toggleText = () => {
    setIsVisible(prev => !prev);
  };

  // Update object state
  const updateCity = () => {
    setUser(prevUser => ({
      ...prevUser,
      city: "Palanpur"
    }));
  };

  // Reset all states
  const resetAll = () => {
    setCount(0);
    setName("");
    setIsVisible(true);
    setUser({ age: 20, city: "Ahmedabad" });
  };

  return (
    <div>
      <h2>Functional Component State Demo</h2>

      {/* Counter */}
      <h3>Counter: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <hr />

      {/* Controlled Input */}
      <h3>Enter Name:</h3>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your Name: {name}</p>

      <hr />

      {/* Conditional Rendering */}
      <button onClick={toggleText}>Toggle Text</button>
      {isVisible && <p>This text is visible</p>}

      <hr />

      {/* Object State */}
      <h3>User Info</h3>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <button onClick={updateCity}>Change City</button>

      <hr />

      <button onClick={resetAll}>Reset All</button>
    </div>
  );
}

export default FunctionalStateDemo;