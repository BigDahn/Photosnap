import Image from "next/image";
import bg from "@/public/assets/shared/desktop/bg-beta.jpg";
import tablet from "@/public/assets/shared/tablet/bg-beta.jpg";
import mobile from "@/public/assets/shared/mobile/bg-beta.jpg";

function Beta() {
  return (
    <div className="min-h-[280px] w-full relative ">
      {/* <div className="w-1.5  bg-[linear-gradient(27deg,#FFC593_0%,#BC7198_43.29%,#5A77FF_83.33%)]  h-full z-100 absolute "></div> */}
      <div className="w-1.5  bg-[linear-gradient(27deg,#FFC593_0%,#BC7198_43.29%,#5A77FF_83.33%)] h-[40%] rotate-90 md:rotate-0 z-100 left-[24%] md:left-0 top-[-20%] md:top-[0%] md:h-full absolute "></div>
      <Image
        src={bg}
        fill
        quality={100}
        alt="hero"
        className="object-cover hidden lg:block"
      />
      <Image
        src={tablet}
        fill
        quality={100}
        alt="hero"
        className="object-cover hidden md:block lg:hidden"
      />
      <Image
        src={mobile}
        fill
        quality={100}
        alt="hero"
        className="object-cover md:hidden block"
      />
      <div className=" relative px-[1.4em] h-full py-[3em] md:py-[4em] md:px-[3em] lg:px-1 ">
        <div className=" max-w-[318px] md:max-w-[1110px] flex flex-col md:flex-row m-auto  justify-between items-start md:items-center lg:items-start gap-3">
          <h1 className="font-bold uppercase text-[32px] md:text-[40px] tracking-[4.17px] leading-12 text-white max-w-[400px] ">
            We’re in beta. Get your invite today!
          </h1>
          <p className="flex justify-end text-[12px] font-bold tracking-[2px] uppercase text-white">
            get an invite
          </p>
        </div>
      </div>
    </div>
  );
}

export default Beta;
