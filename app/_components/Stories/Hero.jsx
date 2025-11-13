"use client";

import Image from "next/image";
import bg from "@/public/assets/stories/desktop/moon-of-appalacia.jpg";
import tablet from "@/public/assets/stories/tablet/moon-of-appalacia.jpg";
import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  useGSAP(() => {
    gsap.set(".hero", {
      opacity: 0,
      scale: 0,
    });
    gsap.to(".hero", {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      stagger: 0.06,
    });
  }, []);

  return (
    <div className="relative h-[725px] w-full">
      <Image
        src={bg}
        alt="hero"
        fill
        className="object-cover lg:block md:hidden"
        quality={100}
      />
      <Image
        src={tablet}
        alt="hero"
        fill
        className="object-cover lg:hidden"
        quality={100}
      />
      <div className="max-w-[387px] relative flex flex-col gap-[2em] justify-center md:ml-[2.4em] lg:ml-[6em] w-full opacity-0 h-full hero">
        <h3 className="font-bold uppercase text-white text-[12px] tracking-[2px]">
          last month&apos;s featured story
        </h3>
        <div className="flex flex-col gap-3">
          <h1 className="text-white font-bold text-[40px] tracking-[4.17px] leading-12">
            HAZY FULL MOON OF APPALACHIA
          </h1>
          <p className="text-[13px] font-medium text-white/45">
            March 2nd 2020{" "}
            <span className="text-white pl-2">by John Appleseed</span>
          </p>
        </div>

        <p className="text-[15px] leading-[25px] text-white/55">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called mountains,&quot; especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <Link
          href="/stories"
          className="font-bold tracking-[2px] text-[12px] text-white"
        >
          READ THE STORY
        </Link>
      </div>
    </div>
  );
}

export default Hero;
