import { useState } from "react";
//assets
import logo from "../assets/logo.jpg";
//components
import Button from "./UI/Button.jsx";

export default function Header({ cartItemsCount }) {
  const [cartItems, setCartItems] = useState(
    cartItemsCount ? cartItemsCount : 0
  );
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>My Food Order App</h1>
      </div>
      <nav>
        <Button textOnly> My Cart ({cartItems}) </Button>
      </nav>
    </header>
  );
}
