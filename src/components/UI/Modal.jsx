import { createPortal } from "react-dom";

export default function Modal({ children, className, ...props }) {
  return createPortal(
    <dialog className={`modal ${className}`} {...props}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
