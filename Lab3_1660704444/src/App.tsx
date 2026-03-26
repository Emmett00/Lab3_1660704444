import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <div className="p-4">
        <nav className="flex gap-4 mb-4">
          <Link to="/">Dashboard</Link>
          <Link to="/products">Products</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;