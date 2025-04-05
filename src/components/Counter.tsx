import React, { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const Counter: React.FC = () => {
  // Using the built-in useState hook
  const [count, setCount] = useState(0);
  
  // Using our custom useLocalStorage hook
  const [savedCount, setSavedCount] = useLocalStorage('savedCount', 0);

  // Using useEffect hook to run side effects
  useEffect(() => {
    // Update the document title whenever count changes
    document.title = `Count: ${count}`;
    
    // Cleanup function (runs before component unmounts or before next effect)
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Only re-run when count changes

  return (
    <div className="counter">
      <h2>Counter Example</h2>
      
      <div>
        <h3>Regular Counter (useState)</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Persistent Counter (useLocalStorage)</h3>
        <p>Saved Count: {savedCount}</p>
        <button onClick={() => setSavedCount(savedCount + 1)}>Increment</button>
        <button onClick={() => setSavedCount(savedCount - 1)}>Decrement</button>
        <p><small>This count persists even after page refresh!</small></p>
      </div>
    </div>
  );
};

export default Counter; 