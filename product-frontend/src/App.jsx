import React, { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import {
  getProducts,
  createProduct,
  deleteProduct
} from "./services/productService";

function App() {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error loading products:", err));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleAdd = (product) => {
    createProduct(product)
      .then(() => loadProducts())
      .catch((err) => {
        console.error("Error creating product:", err);
        alert("Failed to add product");
      });
  };

  const handleDelete = (id) => {
    deleteProduct(id)
      .then(() => loadProducts())
      .catch((err) => {
        console.error("Error deleting product:", err);
        alert("Failed to delete product");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Manager</h1>

      <ProductForm onAdd={handleAdd} />

      <ProductList
        products={products}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;