import React from "react";
import Logo from "../_ui/Logo";

function Footer() {
  return (
    <footer className=" py-[3em] bg-black">
      <section className="max-w-[1110px] py-[0.2em] h-[130px]  flex m-auto justify-between items-center px-3 ">
        <div className="flex gap-[3em]  h-full">
          <div>
            <Logo
              style="w-auto h-auto "
              file="/assets/shared/desktop/footer-logo.svg"
            />
          </div>
          <ul className="flex flex-col text-white font-bold uppercase text-[12px] tracking-[2px] justify-between ">
            <li>home</li>
            <li>stories</li>
            <li>features</li>
            <li>pricing</li>
          </ul>
        </div>

        <div className="text-white flex flex-col justify-between  h-full ">
          <h2 className="flex justify-end">Get an invite</h2>
          <p>Copyright 2019. All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
