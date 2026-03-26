import { useInventoryContext } from "../context/InventoryContext";
import type { Product } from "../types";

export default function Dashboard() {
  const { products } = useInventoryContext();

  const totalItems = products.length;
  const totalValue = products.reduce(
    (sum: number, p: Product) => sum + p.price * p.quantity,0
  );
  const outOfStock = products.filter((p: Product) => p.quantity === 0).length;

  return (
    <div className="flex flex-col min-h-[calc(100vh-175px)]"> 
      {/*Title*/}
      <h1 className="text-2xl font-semibold mb-6 text-blue-400">
        Dashboard
      </h1>

      {/*Cards*/}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#020617] border border-gray-800 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Total Products</p>
          <h2 className="text-2xl font-bold mt-2">{totalItems}</h2>
        </div>

        <div className=" bg-[#020617] border border-gray-800 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Total Value</p>
          <h2 className="text-2xl font-bold mt-2">
            {totalValue.toLocaleString()} THB
          </h2>
        </div>

        <div className="bg-[#020617] border border-gray-800 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Out of Stock</p>
          <h2 className="text-2xl font-bold mt-2 text-red-400">
            {outOfStock}
          </h2>
        </div>
      </div>

      {/*Developed by*/}
      <div className="mt-auto mb-35 flex flex-col items-center justify-center gap-1 text-sm text-gray-400">
        <p className="font-medium whitespace-nowrap">
          Developed by Emmett Meechai Salmon
        </p>
        <p className="font-medium whitespace-nowrap">
          ID: 1660704444
        </p>
      </div>
    </div>
  );
}