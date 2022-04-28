import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, deleteItem }) {
  const renderItems = items.map(item => {
    return <ListingCard key={item.id} item={item} deleteItem={deleteItem} />
  })
  return (
    <main>
      <ul className="cards">
        {renderItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
