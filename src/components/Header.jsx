import { useContext } from "react";
//Assets
import logo from "../assets/logo.jpg";
//Components
import Button from "./UI/Button.jsx";
//Context
import CartContext from "../store/CartContext.jsx";

export default function Header() {
  const cartContext = useContext(CartContext);
  const totalItems = cartContext.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>My Food Order App</h1>
      </div>
      <nav>
        <Button textOnly> My Cart ({totalItems}) </Button>
      </nav>
    </header>
  );
}
