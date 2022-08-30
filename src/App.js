import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import CartProvider from "./Context/CartProvider";
import Categories from "./Pages/Categories";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cata" element={<Categories />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
