import "./App.css";
import ProductList from "./components/ProductList";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
