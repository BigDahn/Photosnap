"use client";

import Logo from "../_ui/Logo";
import NavLinks from "./NavLinks";
import Button from "../_ui/Button";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Header() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.to(
      container.current,

      { opacity: 1, scale: 1.1, duration: 1.2 }
    );
  }, []);

  return (
    <header
      ref={container}
      className="flex py-4 justify-between m-auto md:max-w-screen md:px-[4em] lg:px-1 lg:max-w-[1110px] items-center opacity-0  "
    >
      <Logo style="w-auto h-auto" file="/assets/shared/desktop/logo.svg" />
      <NavLinks />
      <Button style="bg-black text-white h-[40px] w-[158px] cursor-pointer font-bold text-[11px] tracking-[2px] hover:bg-black/20 hover:text-black hover:scale-[1.1] ease-in-out duration-300">
        <Link className="uppercase" href="/invite">
          get an invite
        </Link>
      </Button>
    </header>
  );
}

export default Header;
