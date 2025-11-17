"use client";
import React, { useContext } from "react";
import { CartModalContext, Modal } from "../_ui/Modal";

import Link from "next/link";
import NavLinks from "./NavLinks";
import Button from "../_ui/Button";

function Menu() {
  const { closeMenu, openMenu } = useContext(CartModalContext);

  return (
    <Modal.ModalWindow
      style={`fixed h-[255px] md:hidden rounded-bl-md rounded-br-md w-full  z-[999999999999]  bg-white top-0 left-0 outline-none flex transition-all delay-700  ease-in-out z-10   ${
        openMenu
          ? "translate-y-14 opacity-100 "
          : "-translate-y-full opacity-0 "
      }`}
      className="bg-black/50 fixed top-[9%] left-0  h-screen w-screen flex m-auto transition-all  lg:hidden"
    >
      <div className="max-w-[310px] flex flex-col items-center justify-center gap-[2em]  w-full  mx-auto  py-[2em] h-full ">
        <NavLinks
          className="flex  flex-col items-center gap-4 border-b-gray-400 border-b-2 w-full pb-4 md:hidden"
          textStyle="uppercase text-[15px] font-bold tracking-[2.5px] hover:text-black/50 hover:scale-[1.2] duration-200"
          onClick={() => closeMenu()}
        />
        <Button style="bg-black block md:hidden text-white h-[48px] w-full cursor-pointer font-bold text-[11px] tracking-[2px]  hover:bg-black/20 hover:text-black hover:scale-[1.1] ease-in-out duration-300">
          <Link className="uppercase" href="/invite">
            get an invite
          </Link>
        </Button>
      </div>
    </Modal.ModalWindow>
  );
}

export default Menu;
