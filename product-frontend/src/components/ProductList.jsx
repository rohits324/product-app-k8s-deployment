import React from "react";

function ProductList({ products = [], onDelete }) {

  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          <b>{p.name}</b> — ₹{p.price}
          <br />
          <small>{p.description}</small>
          <br />
          <button onClick={() => onDelete(p.id)}>
            Delete
          </button>
          <hr />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;