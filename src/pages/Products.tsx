import { useState } from "react";
import { useInventoryContext } from "../context/InventoryContext";
import type { Product } from "../types";

export default function Products() {
  const { products, addProduct, updateQuantity, deleteProduct } =
    useInventoryContext();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [search, setSearch] = useState("");

  const filtered = products.filter((p: Product) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (!name) return;
    addProduct(name, price, quantity);
    setName("");
    setPrice(0);
    setQuantity(0);
  };

  return (
    <div>
      {/* Topic */}
      <h1 className="text-2xl font-semibold mb-6 text-blue-400">
        Products
      </h1>

      {/* Input */}
      <div className="flex flex-row w-full gap-4">
        {/* Name */}
        <div className="flex flex-col flex-1 gap-1">
          <label className="text-white font-semibold ml-1">Products</label>
          <input 
            type="text" 
            value={name}
            placeholder="Name" 
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 bg-[#020617] border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Price */}
        <div className="flex flex-col flex-1 gap-1">
          <label className="text-white font-semibold ml-1">Price</label>
          <input 
            type="number" 
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full px-3 py-2 bg-[#020617] border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Quantity */}
        <div className="flex flex-col flex-1 gap-1">
          <label className="text-white font-semibold ml-1">Quantity</label>
          <input 
            type="number" 
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full px-3 py-2 bg-[#020617] border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      
      {/* Add Product */}
      <button
        style={{ marginTop: '24px' }} 
        className="w-full bg-blue-600 py-2 rounded-lg mb-6 hover:bg-blue-500 text-white font-medium transition"
        onClick={handleAdd}>
        + Add Product
      </button>

      {/* Search */}
      <input
        className="w-full bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 mb-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* List */}
      <div className="space-y-3">
        {filtered.map((p: Product) => (
          <div
            key={p.id}
            className={`flex justify-between items-center p-4 rounded-xl border ${
              p.quantity === 0
                ? "bg-red-900/30 border-red-700"
                : "bg-[#020617] border-gray-700"
            }`}
          >
            <div className="text-left">
              <p className="font-medium text-white">{p.name}</p>
              <p className="text-sm text-gray-300">
                Price: {p.price} THB • Quantity: {p.quantity} 
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded text-white hover:bg-gray-800"
                onClick={() => updateQuantity(p.id, -1)}>
                -
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded text-white hover:bg-gray-800"
                onClick={() => updateQuantity(p.id, 1)}>
                +
              </button>
              <button
                className="text-red-400 hover:text-red-300 ml-2"
                onClick={() => deleteProduct(p.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}