import React, { useState } from "react";

const CrudComponent = () => {
    const [items, setItems] = useState([]); // List of items
    const [input, setInput] = useState(''); // Current input value
  
    // Add item to the list
    const handleAddItem = () => {
      if (input.trim() !== '') {
        setItems([...items, input]); // Add the input to the list
        setInput(''); // Clear the input field
      }
    };2
  return (
    <div style={{ padding: '20px' }}>
      <h1>Simple Add Item</h1>
      
      {/* Input Field */}
      <div>
        <input
          type="text"
          
          placeholder="Enter item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button onClick={handleAddItem} style={{ padding: '5px' }}>Add</button>
      </div>

      {/* Display Items */}
      <ul style={{ marginTop: '20px' }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
 

export default CrudComponent;
