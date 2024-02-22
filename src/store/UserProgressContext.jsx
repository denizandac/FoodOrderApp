import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  showCheckout: () => {},
  hideModal: () => {},
});

export function UserProgressContextProvider(props) {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress("cart");
  }

  function showCheckout() {
    setUserProgress("checkout");
  }

  function hideModal() {
    setUserProgress("");
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    showCheckout,
    hideModal,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {props.children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
