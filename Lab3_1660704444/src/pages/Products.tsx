// src/pages/Products.tsx
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

    //reset form
    setName("");
    setPrice(0);
    setQuantity(0);
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Products</h1>
      
      {/*Search(ค้นหา)*/}
      <input
        className="border p-2 my-2"
        placeholder="ค้นหา..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/*Add Form(เพิ่มรายชื่อ)*/}
      <div className="flex gap-2 my-2">
        <input
          placeholder="ชื่อ"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="ราคา"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <input
          type="number"
          placeholder="จำนวน"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <button
          className="bg-blue-500 text-white px-2"
          onClick={handleAdd}
        >
          เพิ่ม
        </button>
      </div>

      {/*List(แสดงรายการสินค้า)*/}
      <div className="space-y-2">
        {filtered.map((p: Product) => (
          <div
            key={p.id}
            className={`p-2 border ${
              p.quantity === 0 ? "bg-red-50" : ""
            }`}
          >
            <p>{p.name}</p>
            <p>ราคา: {p.price}</p>
            <p>จำนวน: {p.quantity}</p>

            <button onClick={() => updateQuantity(p.id, 1)}>+</button>
            <button onClick={() => updateQuantity(p.id, -1)}>-</button>
            <button onClick={() => deleteProduct(p.id)}>ลบ</button>

            {p.quantity === 0 && <span>สินค้าหมด</span>}
          </div>
        ))}
      </div>
    </div>
  );
}