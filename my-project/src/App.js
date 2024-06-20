// src/App.js
import React from 'react';
import Button from './Button';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default App;

