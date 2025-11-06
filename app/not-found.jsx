import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="max-w-screen min-h-[90vh] bg-black text-white flex flex-col gap-[0.3em] justify-center items-center">
      {/* <div className="flex flex-col justify-center items-center gap-[1em] max-h-[300px] bg-yellow-600">
       
        <h4 className="uppercase text-[18px] tracking-[4px] font-normal">
          The page you are looking for does not exist
        </h4>
      </div> */}

      <div className="max-w-[500px] flex justify-center flex-col items-center ">
        <h1 className="text-[130px] tracking-[2px] font-bold">404</h1>
        <Link
          href="/"
          className="uppercase text-[12px] tracking-[2px] bg-white text-black font-bold w-[150px] h-[38px]  flex items-center justify-center"
        >
          go back home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
