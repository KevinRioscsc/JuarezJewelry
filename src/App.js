import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import CartProvider from "./Context/CartProvider";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
