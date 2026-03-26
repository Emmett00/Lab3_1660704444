import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import { InventoryProvider } from "./context/InventoryContext";


function App() {
  return (
    <InventoryProvider>
      <div className="h-screen overflow-hidden bg-[#0f172a] text-white flex flex-col">
        <BrowserRouter>
          <nav className="bg-[#020617] border-b border-gray-800 shrink-0">
            <div className="max-w-4xl mx-auto flex justify-between items-center px-4 py-3">
              <h1 className="font-semibold text-blue-400">
                Inventory System
              </h1>

              <div className="flex gap-6">
                <Link to="/" className="hover:text-blue-400">
                  Dashboard
                </Link>
                <Link to="/products" className="hover:text-blue-400">
                  Products
                </Link>
              </div>
            </div>
          </nav>

          <div className="flex-1 overflow-auto">
            <div className="max-w-4xl mx-auto p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </InventoryProvider>
  );
}

export default App;