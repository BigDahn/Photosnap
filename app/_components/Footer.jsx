import Link from "next/link";
import Logo from "../_ui/Logo";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiPinterestFill,
  RiTwitterFill,
} from "react-icons/ri";
function Footer() {
  return (
    <footer className=" py-[3em] bg-black min-h-[200px]">
      <section className="max-w-[1110px] py-[0.2em] h-[130px]  flex m-auto justify-between items-center  ">
        <div className="flex gap-[6em]  h-full">
          <div className="flex flex-col justify-between cursor-pointer">
            <Logo
              style="w-auto h-auto "
              file="/assets/shared/desktop/footer-logo.svg"
            />
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 bg-white flex items-start justify-end rounded-full hover:bg-[linear-gradient(27deg,#63AFDB_0%,#6028F1_100%)]">
                <RiFacebookFill size={25} color="black" />
              </div>
              <div className="w-5 h-5 bg-white flex items-center justify-center rounded-full hover:bg-[linear-gradient(0deg,#D3205A_0%,#FF5A5A_100%)]">
                <RiYoutubeFill size={15} color="black" />
              </div>
              <div className="w-5 h-5 bg-white flex items-center justify-center rounded-full hover:bg-[linear-gradient(27deg,#65FFEB_0%,#27718A_100%)]">
                <RiTwitterFill size={15} color="black" />
              </div>
              <div className="w-5 h-5 bg-white flex items-center justify-center rounded-full hover:bg-[linear-gradient(27deg,#F6C683_0%,#DE3838_100%)]">
                <RiPinterestFill size={15} color="black" />
              </div>
              <div className="w-5 h-5 bg-white flex items-center justify-center rounded-full hover:bg-[linear-gradient(27deg,#FFC593_0%,#BC7198_51.945%,#5A77FF_100%)]">
                <RiInstagramFill size={15} color="black" />
              </div>
            </div>
          </div>

          <ul className="flex flex-col text-white  font-bold uppercase text-[12px] tracking-[2px] justify-between ">
            <Link href="/">
              <li className="hover:text-white/55 cursor-pointer">home</li>
            </Link>
            <Link href="/stories">
              <li className="hover:text-white/55 cursor-pointer">stories</li>
            </Link>
            <Link href="/features">
              <li className="hover:text-white/55 cursor-pointer">features</li>
            </Link>
            <Link href="/pricing">
              <li className="hover:text-white/55 cursor-pointer">pricing</li>
            </Link>
          </ul>
        </div>

        <div className="text-white flex flex-col justify-between  h-full ">
          <h2 className="flex justify-end text-[12px] font-bold tracking-[2px] uppercase">
            Get an invite
          </h2>
          <p className="text-[15px] font-normal text-white/55">
            Copyright 2019. All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
