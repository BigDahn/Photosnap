import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <main className="flex h-[650px] w-full m-auto ">
      <div className="bg-black h-[650px] w-[45%] relative">
        <div className="w-1.5  bg-[linear-gradient(27deg,#FFC593_0%,#BC7198_43.29%,#5A77FF_83.33%)] top-[25%] h-[304px] absolute "></div>
        <div className="max-w-[387px] flex flex-col gap-[3em] justify-center items-start m-auto h-full">
          <div className="flex flex-col gap-[0.6em]">
            <h2 className="font-bold uppercase text-[40px] tracking-[4.17px] leading-12 text-white ">
              Create and share your photo stories.
            </h2>
            <p className="font-normal text-[15px]  leading-[25px] text-white/60 ">
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
          </div>
          <Link
            href="/invite"
            className="uppercase text-white/60 flex text-[12px] tracking-[2px] font-bold leading-normal gap-[2em] items-center"
          >
            get an invite
            <Image
              src="/assets/shared/desktop/arrow.svg"
              alt="arrow"
              height={12}
              width={42}
              style={{ filter: "invert(60%)" }}
            />
          </Link>
        </div>
      </div>
      <Image
        src="/assets/home/desktop/create-and-share.jpg"
        alt="hero"
        width={830}
        height={650}
        quality={75}
        className="w-[55%] h-auto"
        loading="eager"
      />
    </main>
  );
}

export default Hero;
