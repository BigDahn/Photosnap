"use client";

import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { createPortal } from "react-dom";
import { useOutSideClick } from "../_hooks/useOutsideClick";

const CartModalContext = createContext();

function Modal({ children }) {
  const [openMenu, setOpenMenu] = useState(false);

  const OpenMenu = () => setOpenMenu(true);
  const closeMenu = () => setOpenMenu(false);

  return (
    <CartModalContext.Provider value={{ openMenu, closeMenu, OpenMenu }}>
      {children}
    </CartModalContext.Provider>
  );
}

function Open({ children }) {
  const { OpenMenu } = useContext(CartModalContext);

  function handleClick() {
    OpenMenu();
  }

  return <button onClick={handleClick}>{children}</button>;
}

function ModalWindow({ children, style, className }) {
  const { openMenu, closeMenu } = useContext(CartModalContext);

  console.log(openMenu);
  const ref = useOutSideClick(closeMenu, true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (openMenu !== true) return null;
  return isMounted
    ? createPortal(
        <main className={className}>
          <div ref={ref} className={style}>
            {children}
          </div>
        </main>,
        document.body
      )
    : null;
}

function Button({ children }) {
  const { closeMenu } = useContext(CartModalContext);
  return cloneElement(children, {
    onClick: () => closeMenu(),
  });
}

Modal.Open = Open;
Modal.ModalWindow = ModalWindow;
Modal.Button = Button;

export { Modal, CartModalContext };
