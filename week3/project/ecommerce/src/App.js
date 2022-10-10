import "./App.css";
import ProductList from "./pages/ProductList";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import { FavoritesProvider } from "./contexts/FavoritesProvider";
import FavoriteProducts from "./components/FavoriteProducts";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/favorites" element={<FavoriteProducts />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </FavoritesProvider>
    </div>
  );
}

export default App;
