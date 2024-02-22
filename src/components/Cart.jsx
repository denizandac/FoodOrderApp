import { useContext } from "react";
//Components
import Modal from "./UI/Modal.jsx";
import Button from "./UI/Button.jsx";
//Context
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
//Utils
import { formatter } from "../util/formatter.js";

export default function Cart() {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);
  const cartTotalPrice = cartContext.items.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.amount;
  }, 0);

  const handleCloseCart = () => {
    userProgressContext.hideModal();
  };

  const handleResetCart = () => {
    cartContext.clearCart();
  };
  return (
    <Modal className="cart" open={userProgressContext.progress === "cart"}>
      <h2>Your Food Cart</h2>

      <ul>
        {cartContext.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.amount}
          </li>
        ))}
      </ul>
      <p className="cart-total">{formatter.format(cartTotalPrice)}</p>
      <p className="modal-actions">
        <Button className="reset-btn" textOnly onClick={handleResetCart}>
          Reset Cart
        </Button>
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button>Order</Button>
      </p>
    </Modal>
  );
}
