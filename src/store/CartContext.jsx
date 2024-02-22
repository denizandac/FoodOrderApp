import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item, amount) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const addedItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (addedItemIndex !== -1) {
      const existingItem = state.items[addedItemIndex];
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.amount,
      };
      updatedItems[addedItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, amount: 1 });
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    const deletedItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[deletedItemIndex];
    const updatedItems = [...state.items];
    if (existingItem.amount === 1) {
      updatedItems.splice(deletedItemIndex, 1);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems[deletedItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === "CLEAR_CART") {
    return { items: [] };
  }
}

export function CartContextProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  const cartContext = {
    items: cartState.items,
    addItem: (item, amount) => {
      dispatchCartAction({ type: "ADD_ITEM", item: item, amount: amount });
    },
    removeItem: (id) => {
      dispatchCartAction({ type: "REMOVE_ITEM", id: id });
    },
    clearCart: () => {
      dispatchCartAction({ type: "CLEAR_CART" });
    },
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
