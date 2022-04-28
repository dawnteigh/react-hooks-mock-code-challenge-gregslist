import React, { useState } from "react";

function ListingCard({ item, deleteItem }) {

  const { id, description, image, location } = item

  const [favorited, setFavorited] = useState(false)

  const toggleFav = () => setFavorited(!favorited)

  const handleDelete = () => {
    fetch(
      `http://localhost:6001/listings/${id}`,
      {
        method: "DELETE",
      }
    )
    .then(r => r.json())
    .then(() => deleteItem(id))
  };
 
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button onClick={toggleFav} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleFav} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button id={id} onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
