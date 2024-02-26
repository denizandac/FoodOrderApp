//Utils
import { formatter } from "../util/formatter.js";

export default function CartItem({
  name,
  amount,
  price,
  onIncreaseAmount,
  onDecreaseAmount,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {amount} x {formatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecreaseAmount}>-</button>
        <span>{amount}</span>
        <button onClick={onIncreaseAmount}>+</button>
      </p>
    </li>
  );
}
