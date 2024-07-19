import React, { useState } from "react";
import InputArea from "./components/InputArea";
import "./App.css";

import ToDoItem from "./components/ToDoItem";

function App() {
  const [items, setItems] = useState([]);
  const addItems = (inputText) => {
    if(inputText !== ''){
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
    }
  };
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItems={addItems} />
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <ToDoItem
                key={index}
                text={item}
                deleteItem={deleteItem}
                id={index}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;
