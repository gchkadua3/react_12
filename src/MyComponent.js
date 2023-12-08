import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // useEffect for page load
  useEffect(() => {
    alert('Page loaded!');
  }, []);

  const handleClick = () => {
    alert('Button clicked!');
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
