import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, className, open }) {
  const dialog = useRef();
  useEffect(() => {
    dialog.current.showModal();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
