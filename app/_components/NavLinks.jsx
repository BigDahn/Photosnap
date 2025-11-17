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

function NavLinks({ className, textStyle, onClick }) {
  return (
    <div className={className}>
      {links.map((link, i) => {
        const { name, href } = link;
        return (
          <Link key={i} href={href} className={textStyle} onClick={onClick}>
            {name}
          </Link>
        );
      })}
    </div>
  );
}

export default NavLinks;
