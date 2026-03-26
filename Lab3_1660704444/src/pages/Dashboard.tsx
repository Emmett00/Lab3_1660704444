// src/pages/Dashboard.tsx
import { useInventory } from "../hooks/useInventory";

export default function Dashboard() {
  const { products } = useInventory();

  const totalItems = products.length;
  const totalValue = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );
  const outOfStock = products.filter(p => p.quantity === 0).length;

  return (
    <div>
      <h1 className="text-xl font-bold">Dashboard</h1>
      <p>จำนวนรายการสินค้า: {totalItems}</p>
      <p>มูลค่ารวม: {totalValue}</p>
      <p>สินค้าหมด: {outOfStock}</p>
    </div>
  );
}