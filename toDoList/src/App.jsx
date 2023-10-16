import { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState(""); 
  const [list, setList] = useState([]);
  const [updatedItem, setUpdatedItem] = useState(""); // Initialize updatedItem state

  function addToList() {
    if (item.trim() !== "") {
      setList([...list, item]);
      setItem(""); // Clear the item input
    }
  }

  function deleteItem(index) {
    const newList = list.filter((item, i) => i !== index);
    setList(newList);
  }

  const updateItem = (index, updatedItem) => {
    if (updatedItem.trim() !== "") {
      list.splice(index, 1, updatedItem);
      setList([...list]); // Update the list with the modified item
      setUpdatedItem(""); // Clear the updatedItem input
    }
  }

  return (
    <>
      <h1>TO DO LIST:</h1>
      <br />

      <input
        type="text"
        name="item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <button onClick={addToList}>
        ADD TO LIST
      </button>

      <ol>
        {list.map((listItem, index) => (
          // eslint-disable-next-line react/jsx-key
          <div key={index}>
            <li>{listItem}</li>
            <button onClick={() => deleteItem(index)}>X</button>
            <input
              type="text"
              value={updatedItem}
              onChange={(e) => setUpdatedItem(e.target.value)}
            ></input>
            <button onClick={() => updateItem(index, updatedItem)}>update</button>
          </div>
        ))}
      </ol>
    </>
  );
}

export default App;
