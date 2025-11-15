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
    <footer className="bg-black ">
      <section className=" max-w-[318px] h-[539px]  md:h-[200px] md:max-w-[1110px] py-[3em] md:py-[2em]  flex flex-col md:flex-row   m-auto gap-[2em]   justify-between  md:px-[3em] lg:px-1 items-center ">
        <div className="flex  flex-col items-center md:flex-row md:gap-[6em] gap-[4em] justify-between md:h-full  ">
          <div className="flex flex-col items-center gap-[2em] h-full md:justify-between cursor-pointer">
            <div className="flex flex-col gap-[1.3em]">
              <Logo
                style="w-auto h-auto "
                file="/assets/shared/desktop/footer-logo.svg"
              />
              <ul className="md:flex gap-[1em] lg:hidden hidden  text-white  font-bold uppercase text-[12px] tracking-[2px] justify-between ">
                <Link href="/">
                  <li className="hover:text-white/55 cursor-pointer">home</li>
                </Link>
                <Link href="/stories">
                  <li className="hover:text-white/55 cursor-pointer">
                    stories
                  </li>
                </Link>
                <Link href="/features">
                  <li className="hover:text-white/55 cursor-pointer">
                    features
                  </li>
                </Link>
                <Link href="/pricing">
                  <li className="hover:text-white/55 cursor-pointer">
                    pricing
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex gap-3 items-center md:items-start md:w-full">
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

          <ul className=" flex md:hidden lg:flex flex-col text-white  font-bold uppercase text-[12px] tracking-[2px] md:justify-between gap-[2em] text-center md:text-left ">
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

        <div className="text-white flex flex-col items-center md:items-start gap-2 md:justify-between md:h-full   ">
          <h2 className="flex justify-center md:justify-end w-full text-[12px] font-bold tracking-[2px] uppercase">
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

// flex

// min-h-[285px] lg:min-h-[14em]
