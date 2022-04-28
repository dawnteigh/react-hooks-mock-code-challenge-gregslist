import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([]);
  const [itemsToDisplay, setItemsToDisplay] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => {
        setItems(data)
        setItemsToDisplay(data)
      });
  }, []);

  const searchItems = (searchTerm) => {
    const filteredItems = items.filter(item => item.description.toLowerCase().includes(searchTerm.toLowerCase()))
    setItemsToDisplay(filteredItems)
  }

  const deleteItem = (id) => {
    const filteredItems = items.filter(item => item.id !== id)
    const filteredItemsToDisplay = itemsToDisplay.filter(item => item.id !== id)
    setItems(filteredItems)
    setItemsToDisplay(filteredItemsToDisplay)
  }
  
  return (
    <div className="app">
      <Header items={itemsToDisplay} searchItems={searchItems} />
      <ListingsContainer items={itemsToDisplay} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
