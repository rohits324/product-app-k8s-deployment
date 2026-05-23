import React, { useState } from "react";

function ProductForm({ onAdd }) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Required validation
    if (!product.name.trim()) {
      alert("Name is required");
      return;
    }

    if (!product.price) {
      alert("Price is required");
      return;
    }

    // ✅ Convert price safely
    const priceValue = parseFloat(product.price);

    // ❌ Invalid number check
    if (isNaN(priceValue)) {
      alert("Price must be a valid number");
      return;
    }

    // ❌ Negative price check
    if (priceValue < 0) {
      alert("Price cannot be negative");
      return;
    }

    const formattedProduct = {
      name: product.name.trim(),
      description: product.description.trim(),
      price: priceValue
    };

    console.log("Sending to backend:", formattedProduct);

    onAdd(formattedProduct);

    // Reset form
    setProduct({
      name: "",
      description: "",
      price: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
      />

      <input
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
      />

      <input
        name="price"
        type="number"
        step="0.01"
        min="0"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
      />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;