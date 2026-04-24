import React, { useEffect, useState } from "react";
import "./App.css";
import Component1 from "./component1";

const API_URL = "https://test2-production-b5ac.up.railway.app/api/items";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [colour, setColour] = useState("");
  const [size, setSize] = useState("");
  //color = ""
  // public funtion setColour(String colour){
  //   this.colour = colour;
  // }

  // Fetch items
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  // Add item
  const addItem = async () => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, quantity, price, colour, size })
    });

    const newItem = await res.json();
    setItems([...items, newItem]);

    setName("");
    setQuantity(1);
    setPrice(0);
    setColour("");
    setSize("");
  };

  return (
    <>  
    <div className="app">
      <div className="card">
        <h1 className="title">Item Manager</h1>

        <div className="form-grid">
          <input
            placeholder="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            placeholder="Colour"
            value={colour}
            onChange={(e) => setColour(e.target.value)}
          />

          <input
            placeholder="Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />

          <button className="add-btn" onClick={addItem}>Add Item</button>
        </div>

        <section className="item-list-section">
          <h2 className="subtitle">Items</h2>

          {items.length === 0 ? (
            <p className="empty">No items yet. Add your first item above.</p>
          ) : (
            <ul className="item-list">
              {items.map((item) => (
                <li key={item._id || `${item.name}-${item.price}`} className="item-row">
                  <span className="item-name">{item.name}</span>
                  <span>Qty: {item.quantity}</span>
                  <span>Price: ${item.price}</span>
                  <span>Colour: {item.colour || "-"}</span>
                  <span>Size: {item.size || "-"}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
    <Component1 onClick={() => alert("Button in Component1 clicked!")} />
    </>
  );
}

export default App;