import Image from "next/image";
import bg from "@/public/assets/features/desktop/hero.jpg";

function Hero() {
  return (
    <main className="flex h-[490px] w-full m-auto  ">
      <div className="bg-black h-[490px] w-[45%] relative">
        <div className="w-1.5  bg-[linear-gradient(27deg,#FFC593_0%,#BC7198_43.29%,#5A77FF_83.33%)] top-[37%] h-36 absolute "></div>
        <div className="max-w-[387px] flex flex-col gap-[3em] justify-center items-start m-auto h-full">
          <div className="flex flex-col gap-[0.6em]">
            <h2 className="font-bold uppercase text-[40px] tracking-[4.17px] leading-12 text-white ">
              features
            </h2>
            <p className="font-normal text-[15px]  leading-[25px] text-white/60 ">
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
            </p>
          </div>
        </div>
      </div>
      <div className="relative min-w-[55%]">
        <Image
          src={bg}
          alt="hero"
          // width={830}
          // height={650}
          quality={100}
          className="object-cover"
          fill
          loading="eager"
        />
      </div>
    </main>
  );
}

export default Hero;
