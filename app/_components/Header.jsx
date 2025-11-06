import React from "react";
import Logo from "../_ui/Logo";
import NavLinks from "./NavLinks";
import Button from "../_ui/Button";
import Link from "next/link";

function Header() {
  return (
    <header className="flex py-2.5 justify-between m-auto max-w-[1110px] items-center">
      <Logo style="w-auto h-auto" file="/assets/shared/desktop/logo.svg" />
      <NavLinks />
      <Button style="bg-black text-white h-[40px] w-[158px] font-bold text-[12px] tracking-[2px] ">
        <Link className="uppercase" href="/invite">
          get an invite
        </Link>
      </Button>
    </header>
  );
}

export default Header;
