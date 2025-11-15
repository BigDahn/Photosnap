"use client";

import Image from "next/image";
import bg from "@/public/assets/features/desktop/hero.jpg";
import tablet from "@/public/assets/features/tablet/hero.jpg";
import mobile from "@/public/assets/features/mobile/hero.jpg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  useGSAP(() => {
    gsap.set(".features", {
      opacity: 0,
      x: -100,
    });
    gsap.set(".img", {
      opacity: 0,
      x: 100,
    });
    gsap.to(".features, .img", {
      opacity: 1,
      x: 0,
      duration: 1.08,
      stagger: 0.06,
    });
  }, []);

  return (
    <main className="flex flex-col-reverse md:flex-row h-[594px] md:h-[490px] w-full m-auto  ">
      <div className="bg-black h-[300px] w-full md:h-[490px] md:w-[61%] lg:w-[45%] relative features opacity-0">
        <div className="w-1.5  bg-[linear-gradient(27deg,#FFC593_0%,#BC7198_43.29%,#5A77FF_83.33%)] top-[-24%] md:top-[36%] lg:top-[37%] h-36 absolute rotate-90 md:rotate-0  left-[21%] md:left-0  "></div>
        <div className="   flex flex-col md:gap-[3em] justify-center items-start  px-[1.4em] md:px-[2em] h-full">
          <div className="flex flex-col gap-[0.6em] max-w-[318px] md:max-w-[387px]">
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
      <div className="relative min-w-full h-[294px] md:h-full  md:min-w-[39%] lg:min-w-[55%] img opacity-0">
        <Image
          src={bg}
          alt="hero"
          quality={100}
          className="object-cover md:hidden lg:block"
          fill
          loading="eager"
        />
        <Image
          src={tablet}
          alt="hero"
          quality={100}
          className="object-cover hidden md:block lg:hidden"
          fill
          loading="eager"
        />
        <Image
          src={mobile}
          alt="hero"
          quality={100}
          className="object-cover block 2xl:object-cover md:hidden "
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </main>
  );
}

export default Hero;
