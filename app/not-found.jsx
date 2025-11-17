import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className=" min-h-screen bg-black text-white flex flex-col gap-[0.3em] justify-center items-center">
      <div className="max-w-[500px] flex justify-center flex-col items-center ">
        <h1 className="text-[130px] tracking-[2px] font-bold">404</h1>
        <Link
          href="/"
          className="uppercase text-[12px] tracking-[2px] bg-white text-black font-bold w-[160px] h-[40px]  flex items-center justify-center hover:bg-white/20 hover:text-white hover:transition-all hover:scale-105 hover:ease-in-out hover:duration-500"
        >
          go back home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
