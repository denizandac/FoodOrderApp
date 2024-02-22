import { useContext } from "react";
//Assets
import logo from "../assets/logo.jpg";
//Components
import Button from "./UI/Button.jsx";
//Context
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  const totalItems = cartContext.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const handleOpenCart = () => {
    userProgressContext.showCart();
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>My Food Order App</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleOpenCart}>
          My Cart ({totalItems})
        </Button>
      </nav>
    </header>
  );
}
