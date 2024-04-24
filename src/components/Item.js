import React, { useState } from "react";

function Item({ name, category }) {
  const [items, setItems] = useState(true);
  const itemClass = items ? "" : "in-cart";
  const color = items ? "add" : "remove";
  function addBtnHandler() {
    setItems(() => !items);
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={color} onClick={addBtnHandler}>
        {items ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
