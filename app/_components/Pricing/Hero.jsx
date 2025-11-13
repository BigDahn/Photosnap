"use client";

import Image from "next/image";
import bg from "@/public/assets/pricing/desktop/hero.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  useGSAP(() => {
    gsap.to(".hero", {
      scale: 1,
      duration: 1.2,
      delay: 0.02,
      stagger: 0.05,
      opacity: 1,
    });
    gsap.to(".img", {
      scale: 1,
      duration: 1.2,
      delay: 0.02,
      stagger: 0.05,
      opacity: 1,
    });
  }, []);
  return (
    <main className="flex h-[490px] w-full m-auto  ">
      <div className="bg-black h-[490px] w-[45%] relative hero opacity-0 scale-0 ">
        <div className="w-1.5  bg-[linear-gradient(27deg,#FFC593_0%,#BC7198_43.29%,#5A77FF_83.33%)] top-[37%] h-36 absolute "></div>
        <div className="max-w-[387px] flex flex-col gap-[3em] justify-center items-start m-auto h-full">
          <div className="flex flex-col gap-[0.6em]">
            <h2 className="font-bold uppercase text-[40px] tracking-[4.17px] leading-12 text-white ">
              pricing
            </h2>
            <p className="font-normal text-[15px]  leading-[25px] text-white/60 ">
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It’s the simple way to create and share
              your photos.
            </p>
          </div>
        </div>
      </div>
      <div className="relative min-w-[55%] img opacity-0 scale-0">
        <Image
          src={bg}
          alt="hero"
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
