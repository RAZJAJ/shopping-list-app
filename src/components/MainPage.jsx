import React, { useState } from "react";
import cartImage from "../assets/cart.png";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "https://68f425d6b16eb6f46833f368.mockapi.io/items"; 
const fetchItems = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

const addItemAPI = async (item) => {
  const { data } = await axios.post(API_URL, { name: item });
  return data;
};

const deleteItemAPI = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

const MainPage = () => {
  const queryClient = useQueryClient();
  const [input, setInput] = useState("");

  const { data: items = [], isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: fetchItems,
  });

  const addItemMutation = useMutation({
    mutationFn: addItemAPI,
    onSuccess: () => {
      queryClient.invalidateQueries(["items"]);
    },
  });

  const deleteItemMutation = useMutation({
    mutationFn: deleteItemAPI,
    onSuccess: () => {
      queryClient.invalidateQueries(["items"]);
    },
  });

  const addItem = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const duplicate = items.some(
      (item) => item.name.toLowerCase() === trimmed.toLowerCase()
    );
    if (duplicate) {
      alert("This item already exists!");
      return;
    }
    addItemMutation.mutate(trimmed);
    setInput("");
  };

  const removeItem = (id) => {
    deleteItemMutation.mutate(id);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen w-screen bg-[#D9D9D9] flex flex-col items-center justify-center p-6 overflow-hidden">
      <h1 className="text-4xl font-bold text-black mb-4">Shopping List</h1>

      <img src={cartImage} alt="Cart" className="w-32 h-32 mb-6" />

      <div className="flex flex-col items-center gap-4 mb-8">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item here..."
          className="w-72 p-3 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
        <button
          onClick={addItem}
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all"
        >
          Add to Cart
        </button>
      </div>
      
      <p className="text-gray-600 text-sm mb-6">
        To delete an item, just tap on it 
      </p>

      
      <div className="grid grid-cols-3 gap-x-[200px] gap-y-[20px] w-full max-w-[300px] justify-items-center">
        {items.length === 0 ? (
          <p className="col-span-3 text-gray-600 italic">No items yet</p>
        ) : (
          items.map((item) => (
            <button
              key={item.id}
              onClick={() => removeItem(item.id)}
              className="bg-white border border-gray-400 px-4 py-2 rounded-full shadow-md text-black hover:bg-red-100 transition-all w-24 text-center"
            >
              {item.name}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default MainPage;
