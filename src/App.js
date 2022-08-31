import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import CartProvider from "./Context/CartProvider";
import Categories from "./Pages/Categories";
import NavBarAnimate from "./Snippets/NavBarAnimate";
import {Container} from './WebStyled'

function App() {
  return (
    <CartProvider>
      <NavBarAnimate/>
      <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories/:id" element={<Categories />} />
      </Routes>
      </Container>
    </CartProvider>
  );
}

export default App;
