"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

function DesignedForEveryOne() {
  const ScrollRef = useRef();
  const ImageRef = useRef();

  useGSAP(
    () => {
      const paragraph = new SplitText(".para", { type: "lines" });
      const header = new SplitText(".header", { type: "lines" });

      const container = gsap.timeline({
        scrollTrigger: {
          trigger: ScrollRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "restart none restart none",
        },
      });
      container.from(ImageRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.07,
        ease: "power2.out",
      });

      container.from(header.lines, {
        x: 100,
        opacity: 0,
        stagger: 0.06,
        ease: "expo.out",
        duration: 1.1,
      });

      container.from(paragraph.lines, {
        x: 100,
        opacity: 0,
        stagger: 0.04,
        ease: "expo.out",
        duration: 1.1,
      });
      container.from(
        ".link",
        {
          x: 100,
          opacity: 0,
          stagger: 0.06,
          ease: "expo.out",
          duration: 1.1,
        },
        "-=0.1"
      );
    },
    { scope: ScrollRef }
  );

  return (
    <main
      ref={ScrollRef}
      className="flex flex-col-reverse md:flex-row  h-[600px] w-full m-auto  "
    >
      <div className="  text-black h-full w-full md:w-[61%] lg:w-[45%]">
        <div className=" max-w-[318px] md:max-w-[387px] flex flex-col  gap-5 md:gap-[3em] justify-center items-start m-auto h-full">
          <div className="flex flex-col gap-[0.6em] pt-2">
            <h2 className="font-bold uppercase text-[40px] tracking-[4.17px] leading-12 text-black header ">
              DESIGNED FOR EVERYONE
            </h2>
            <p className="font-normal text-[15px]  leading-[25px] text-black/80 para">
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
          </div>
          <Link
            href="/stories"
            className="uppercase text-black flex text-[12px] tracking-[2px]  font-bold leading-normal gap-[2em] items-center link"
          >
            view the stories
            <Image
              src="/assets/shared/desktop/arrow.svg"
              alt="arrow"
              height={12}
              width={42}
            />
          </Link>
        </div>
      </div>

      <div
        ref={ImageRef}
        className="relative min-w-full h-full  md:min-w-[39%] lg:min-w-[55%] "
      >
        <Image
          src="/assets/home/desktop/designed-for-everyone.jpg"
          alt="hero"
          quality={100}
          className="object-cover 2xl:object-cover lg:block md:hidden "
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Image
          src="/assets/home/tablet/designed-for-everyone.jpg"
          alt="hero"
          quality={100}
          className="object-cover 2xl:object-cover lg:hidden hidden md:flex  "
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Image
          src="/assets/home/mobile/designed-for-everyone.jpg"
          alt="hero"
          quality={100}
          className="object-cover 2xl:object-cover md:hidden "
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </main>
  );
}

export default DesignedForEveryOne;
