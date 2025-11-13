import Image from "next/image";
import bg from "@/public/assets/shared/desktop/bg-beta.jpg";

function Beta() {
  return (
    <div className="min-h-[280px] w-full relative ">
      <div className="w-1.5  bg-[linear-gradient(27deg,#FFC593_0%,#BC7198_43.29%,#5A77FF_83.33%)]  h-full z-100 absolute "></div>
      <Image src={bg} fill quality={100} alt="hero" className="object-cover" />
      <div className="max-w-[1110px] relative flex m-auto  justify-between items-center lg:items-start h-full py-[4em] md:px-[3em] lg:px-1 ">
        <h1 className="font-bold uppercase text-[40px] tracking-[4.17px] leading-12 text-white max-w-[400px] ">
          We’re in beta. Get your invite today!
        </h1>
        <p className="flex justify-end text-[12px] font-bold tracking-[2px] uppercase text-white">
          get an invite
        </p>
      </div>
    </div>
  );
}

export default Beta;
