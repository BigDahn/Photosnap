import React from "react";
import Logo from "../_ui/Logo";
import NavLinks from "./NavLinks";
import Button from "../_ui/Button";
import Link from "next/link";

function Header() {
  return (
    <header className="flex py-4 justify-between m-auto max-w-[1110px] items-center">
      <Logo style="w-auto h-auto" file="/assets/shared/desktop/logo.svg" />
      <NavLinks />
      <Button style="bg-black text-white h-[40px] w-[158px] cursor-pointer font-bold text-[11px] tracking-[2px] hover:bg-black/20 hover:text-black">
        <Link className="uppercase" href="/invite">
          get an invite
        </Link>
      </Button>
    </header>
  );
}

export default Header;
