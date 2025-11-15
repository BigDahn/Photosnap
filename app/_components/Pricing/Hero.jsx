"use client";

import Image from "next/image";
import bg from "@/public/assets/pricing/desktop/hero.jpg";
import tablet from "@/public/assets/pricing/tablet/hero.jpg";
import mobile from "@/public/assets/pricing/mobile/hero.jpg";

// for animation

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
    <main className="flex flex-col-reverse md:flex-row h-[594px] md:h-[490px]  m-auto  ">
      <div className="bg-black h-[300px] w-full md:h-[490px] md:w-[61%] lg:w-[45%]  relative hero opacity-0 scale-0 ">
        <div className="w-1.5  bg-[linear-gradient(27deg,#FFC593_0%,#BC7198_43.29%,#5A77FF_83.33%)] top-[-24%] md:top-[36%] lg:top-[37%] h-36 absolute rotate-90 md:rotate-0  left-[21%] md:left-0  "></div>
        <div className=" flex flex-col gap-[3em] justify-center items-start mx-auto h-full px-[1.4em] md:px-[2em]">
          <div className="flex flex-col gap-[0.6em] max-w-[318px] md:max-w-[387px]">
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
      <div className="relative  min-w-full h-[294px] md:h-full md:min-w-[39%] lg:min-w-[55%] img opacity-0 scale-0">
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
