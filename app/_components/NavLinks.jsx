import Link from "next/link";
import React from "react";

const links = [
  {
    name: "stories",
    href: "/stories",
  },
  {
    name: "features",
    href: "/features",
  },
  {
    name: "pricing",
    href: "/pricing",
  },
];

function NavLinks() {
  return (
    <div className="md:flex items-center gap-6 hidden">
      {links.map((link, i) => {
        const { name, href } = link;
        return (
          <Link
            key={i}
            href={href}
            className="uppercase text-[12px] font-bold tracking-[2px] hover:text-black/50 hover:scale-[1.2] duration-200"
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
}

export default NavLinks;
