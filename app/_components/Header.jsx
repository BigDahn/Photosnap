"use client";

import Logo from "../_ui/Logo";
import NavLinks from "./NavLinks";
import Button from "../_ui/Button";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";

function Header() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.to(
      container.current,

      { opacity: 1, scale: 1.1, duration: 1.2 }
    );
  }, []);

  return (
    <main className="fixed z-100  w-full bg-white">
      <header
        ref={container}
        className="flex py-[2em] md:py-4 justify-between m-auto md:max-w-screen px-[2em] md:px-[3em] lg:px-1 lg:max-w-[1110px] items-center opacity-0    "
      >
        <Logo style="w-auto h-auto" file="/assets/shared/desktop/logo.svg" />
        <NavLinks />
        <Button style="bg-black hidden md:block text-white h-[40px] w-[158px] cursor-pointer font-bold text-[11px] tracking-[2px] hover:bg-black/20 hover:text-black hover:scale-[1.1] ease-in-out duration-300">
          <Link className="uppercase" href="/invite">
            get an invite
          </Link>
        </Button>
        <Image
          src="/assets/shared/mobile/menu.svg"
          alt="menu"
          width={0}
          height={0}
          className="w-6 h-3 md:hidden"
        />
      </header>
    </main>
  );
}

export default Header;
