import { useContext } from "react";
//Components
import Modal from "./UI/Modal.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
//Context
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
//Utils
import { formatter } from "../util/formatter.js";

export default function Checkout() {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  const cartTotalPrice = cartContext.items.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.amount;
  }, 0);

  const handleCloseCheckout = () => {
    userProgressContext.hideModal();
  };
  const handleBackToCart = () => {
    userProgressContext.showCart();
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    // console.log(customerData);
    // console.log(cartContext.items);

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartContext.items,
          customer: customerData,
        },
      }),
    });
  };

  return (
    <Modal
      open={userProgressContext.progress === "checkout"}
      onClose={
        userProgressContext.progress === "checkout" ? handleCloseCheckout : null
      }
    >
      <form onSubmit={handleSubmitForm}>
        <h2>Your Food Cart</h2>
        <p> Total Amount : {formatter.format(cartTotalPrice)} </p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="text" id="email" />
        <Input label="Address" type="text" id="address" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button textOnly type="button" onClick={handleBackToCart}>
            Back to Cart
          </Button>
          <Button>Confirm</Button>
          <Button textOnly type="button" onClick={handleCloseCheckout}>
            Cancel
          </Button>
        </p>
      </form>
    </Modal>
  );
}
