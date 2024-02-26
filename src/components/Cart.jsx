import { useContext } from "react";
//Components
import Modal from "./UI/Modal.jsx";
import Button from "./UI/Button.jsx";
import CartItem from "./CartItem.jsx";
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

  const handleGoCheckout = () => {
    userProgressContext.showCheckout();
  };

  const handleIncreaseAmount = (item, amount) => {
    cartContext.addItem(item, amount);
  };

  const handleDecreaseAmount = (id) => {
    cartContext.removeItem(id);
  };

  const cartLength = cartContext.items.length;

  return (
    <Modal
      className="cart"
      open={userProgressContext.progress === "cart"}
      onClose={userProgressContext.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Food Cart</h2>

      <ul>
        {cartContext.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onIncreaseAmount={() => handleIncreaseAmount(item, 1)}
            onDecreaseAmount={() => handleDecreaseAmount(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{formatter.format(cartTotalPrice)}</p>
      <p className="modal-actions">
        {cartLength > 0 && <Button onClick={handleGoCheckout}>Order</Button>}
        {cartLength > 0 && (
          <Button className="reset-btn" textOnly onClick={handleResetCart}>
            Reset Cart
          </Button>
        )}
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
      </p>
    </Modal>
  );
}
