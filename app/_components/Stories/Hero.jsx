"use client";

import Image from "next/image";
import bg from "@/public/assets/stories/desktop/moon-of-appalacia.jpg";
import tablet from "@/public/assets/stories/tablet/moon-of-appalacia.jpg";
import mobile from "@/public/assets/stories/mobile/moon-of-appalacia.jpg";

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
    <>
      <div className="relative h-[725px] w-full md:block hidden">
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
            mountains, is popularly called mountains,&quot; especially in
            eastern Kentucky and West Virginia, and while the ridges are not
            high, the terrain is extremely rugged.
          </p>
          <Link
            href="/stories"
            className="font-bold tracking-[2px] text-[12px] text-white"
          >
            READ THE STORY
          </Link>
        </div>
      </div>
      <main className="flex flex-col-reverse md:hidden w-full h-[812px]   ">
        <div className="bg-black h-[495px] hero opacity-0">
          <div className="  px-[1.5em] flex flex-col gap-[0.4em] justify-center    h-full">
            <div className="max-w-[318px] flex flex-col gap-[1.4em] justify-center  w-full  h-full ">
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
                The dissected plateau area, while not actually made up of
                geological mountains, is popularly called mountains,&quot;
                especially in eastern Kentucky and West Virginia, and while the
                ridges are not high, the terrain is extremely rugged.
              </p>
              <Link
                href="/stories"
                className="font-bold tracking-[2px] text-[12px] text-white"
              >
                READ THE STORY
              </Link>
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
          className="relative w-full h-[317px]  md:hidden  hero opacity-0 "
        >
          <Image
            src={mobile}
            alt="hero"
            quality={100}
            className="object-cover  md:hidden "
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </main>
    </>
  );
}

export default Hero;
