"use client";

import Image from "next/image";
import Link from "next/link";
import bg from "@/public/assets/home/desktop/create-and-share.jpg";
import tablet from "@/public/assets/home/tablet/create-and-share.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      "#hero",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
        duration: 1.2,
      }
    );
    gsap.to("#info", {
      y: 0,
      stagger: 0.5,
      opacity: 1,
    });
  }, []);

  return (
    <main className="flex md:h-[650px] lg:h-[750px]  md:max-w-screen  lg:w-full m-auto   ">
      <div className="bg-black h-full lg:h-[750px]  md:w-[61%] lg:w-[45%] relative">
        <div className="w-1.5  bg-[linear-gradient(27deg,#FFC593_0%,#BC7198_43.29%,#5A77FF_83.33%)] md:top-[27%] lg:top-[25%] h-[304px] absolute "></div>
        <div className="max-w-[387px] flex flex-col gap-[3em] justify-center items-start m-auto h-full">
          <div className="flex flex-col gap-[0.6em]">
            <h2
              id="info"
              className="font-bold uppercase text-[40px] tracking-[4.17px] opacity-0 leading-12 text-white "
            >
              Create and share your photo stories.
            </h2>
            <p
              id="info"
              className="font-normal text-[15px]  leading-[25px] text-white/60 opacity-0"
            >
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
          </div>
          <Link
            id="info"
            href="/invite"
            className="uppercase text-white/60 flex text-[12px] tracking-[2px] font-bold leading-normal gap-[2em] items-center opacity-0"
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
      <div
        id="hero"
        className="relative md:min-w-[39%] lg:min-w-[55%] opacity-0  "
      >
        <Image
          src={bg}
          alt="hero"
          quality={100}
          className="object-cover lg:block 2xl:object-cover md:hidden "
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Image
          src={tablet}
          alt="hero"
          quality={100}
          className="object-cover lg:hidden"
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </main>
  );
}

export default Hero;
