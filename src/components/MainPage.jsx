import React, { useState } from "react";
import cartImage from "../assets/cart.png"; 

const MainPage = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  const removeItem = (itemToRemove) => {
    setItems(items.filter((item) => item !== itemToRemove));
  };

  return (
    <div className="min-h-screen bg-[#D9D9D9] flex flex-col items-center justify-center p-6">
      
      <h1 className="text-4xl font-bold text-black mb-4">SHOPPING LIST</h1>

      
      <img src={cartImage} alt="Cart" className="w-32 h-32 mb-6" />

      
      <div className="flex flex-col items-center gap-2 mb-8">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter items here..."
          className="w-72 p-3 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={addItem}
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all"
        >
          Add to Cart
        </button>
      </div>

      
      <div className="grid grid-cols-3 gap-3 w-full max-w-md justify-items-center">
        {items.length === 0 ? (
          <p className="col-span-3 text-gray-600 italic">No items yet</p>
        ) : (
          items.map((item, index) => (
            <button
              key={index}
              onClick={() => removeItem(item)}
              className="bg-white border border-gray-400 px-4 py-2 rounded-full shadow-md text-black hover:bg-red-100 transition-all w-24 text-center"
            >
              {item}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default MainPage;
