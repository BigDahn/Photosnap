"use client";

import Image from "next/image";
import bg from "@/public/assets/features/desktop/hero.jpg";
import tablet from "@/public/assets/features/tablet/hero.jpg";
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
    <main className="flex h-[490px] w-full m-auto overflow-hidden ">
      <div className="bg-black h-[490px] md:w-[61%] lg:w-[45%] relative features opacity-0">
        <div className="w-1.5  bg-[linear-gradient(27deg,#FFC593_0%,#BC7198_43.29%,#5A77FF_83.33%)] md:top-[36%] lg:top-[37%] h-36 absolute "></div>
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
      <div className="relative md:min-w-[39%] lg:min-w-[55%] img opacity-0">
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
          className="object-cover lg:hidden"
          fill
          loading="eager"
        />
      </div>
    </main>
  );
}

export default Hero;
