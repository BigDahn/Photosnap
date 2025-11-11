"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function BeautifulStories() {
  const ScrollRef = useRef();
  const ImageRef = useRef();

  useGSAP(
    () => {
      const paragraph = new SplitText(".text", { type: "lines" });
      const header = new SplitText(".header", { type: "lines" });

      const stories = gsap.timeline({
        scrollTrigger: {
          trigger: ScrollRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "restart none restart none",
        },
      });

      stories.from(ImageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      stories.from(header.lines, {
        y: 100,
        opacity: 0,
        stagger: 0.01,
        ease: "expo.out",
        duration: 1,
      });

      stories.from(
        paragraph.lines,
        {
          y: 100,
          opacity: 0,
          stagger: 0.03,
          ease: "expo.out",
          duration: 1,
        },
        "-=0.3"
      );
      stories.from(
        ".link",
        {
          y: 100,
          opacity: 0,
          stagger: 0.02,
          ease: "expo.out",
          duration: 1,
        },
        "-=0.4"
      );
    },
    { scope: ScrollRef }
  );
  return (
    <>
      <main
        ref={ScrollRef}
        className="flex h-[600px] w-full m-auto flex-row-reverse box "
      >
        <div className=" text-black w-[45%]">
          <div className="max-w-[387px] flex flex-col gap-[3em] justify-center items-start m-auto h-full">
            <div className="flex flex-col gap-[0.6em] box">
              <h2 className="font-bold uppercase text-[40px] tracking-[4.17px] leading-12 text-black header">
                BEAUTIFUL STORIES <br />
                EVERY TIME
              </h2>
              <p className="font-normal text-[15px] leading-[25px] text-black/80 text ">
                We provide design templates to ensure your stories look
                terrific. Easily add photos, text, embed maps and media from
                other networks. Then share your story with everyone.
              </p>
            </div>
            <Link
              href="/stories"
              className="uppercase text-black flex text-[12px] tracking-[2px] font-bold leading-normal gap-[2em] items-center link"
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

        <div ref={ImageRef} className="relative min-w-[55%] ">
          <Image
            src="/assets/home/desktop/beautiful-stories.jpg"
            alt="hero"
            quality={100}
            className="object-cover 2xl:object-cover "
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </main>
    </>
  );
}

export default BeautifulStories;
