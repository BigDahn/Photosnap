"use client";

import CompareItems from "./CompareItems";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function ComparisonTable() {
  useGSAP(() => {
    gsap.set(".items", { opacity: 0 });
    ScrollTrigger.batch(".items", {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.19,
          duration: 1.3,
        });
      },
      onLeave: (batch) => {
        gsap.set(batch, {
          opacity: 0,
          overwrite: true,
        });
      },
      onEnterBack: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.19,
          duration: 1.3,
        });
      },
      onLeaveBack: (batch) => {
        gsap.set(batch, {
          opacity: 0,
          overwrite: true,
        });
      },
      once: false, // Only animate once
    });
  }, []);
  return (
    <main className="max-w-[1110px] m-auto flex flex-col items-center pt-[3em] pb-[8em] gap-[2em] px-[3em] ">
      <h1 className="font-bold uppercase text-[40px] leading-12 tracking-[4.17px] opacity-0 items">
        compare
      </h1>
      <section className="max-w-[731px] flex flex-col justify-center mx-auto gap-9 ">
        <div className="grid grid-cols-[26rem_1fr_1fr_1fr] gap-x-[2em] justify-items-center border-b border-solid border-black pb-6  uppercase items">
          <h3 className="text-[12px] font-bold tracking-[2px] justify-self-start">
            The features
          </h3>
          <h3 className="text-[12px] font-bold tracking-[2px]">basic</h3>
          <h3 className="text-[12px] font-bold tracking-[2px]">pro</h3>
          <h3 className="text-[12px] font-bold tracking-[2px]">business</h3>
        </div>

        <CompareItems
          feature="unlimited story posting"
          basic={true}
          pro={true}
          business={true}
          className="grid grid-cols-[26rem_1fr_1fr_1fr] gap-x-[2em] justify-items-center border-b border-solid border-[#DFDFDF] pb-6  uppercase items"
        />
        <CompareItems
          feature="unlimited photo upload"
          basic={true}
          pro={true}
          business={true}
          className="grid grid-cols-[26rem_1fr_1fr_1fr] gap-x-[2em] justify-items-center border-b border-solid border-[#DFDFDF] pb-6  uppercase items"
        />
        <CompareItems
          feature="embedding custom content"
          basic={false}
          pro={true}
          business={true}
          className="grid grid-cols-[26rem_1fr_1fr_1fr] gap-x-[2em] justify-items-center border-b border-solid border-[#DFDFDF] pb-6  uppercase items"
        />
        <CompareItems
          feature="customize metadata"
          basic={false}
          pro={true}
          business={true}
          className="grid grid-cols-[26rem_1fr_1fr_1fr] gap-x-[2em] justify-items-center border-b border-solid border-[#DFDFDF] pb-6  uppercase items"
        />
        <CompareItems
          feature="advanced metrics"
          basic={false}
          pro={false}
          business={true}
          className="grid grid-cols-[26rem_1fr_1fr_1fr] gap-x-[2em] justify-items-center border-b border-solid border-[#DFDFDF] pb-6  uppercase items"
        />
        <CompareItems
          feature="photo downloads"
          basic={false}
          pro={false}
          business={true}
          className="grid grid-cols-[26rem_1fr_1fr_1fr] gap-x-[2em] justify-items-center border-b border-solid border-[#DFDFDF] pb-6  uppercase items"
        />
        <CompareItems
          feature="search engine indexing"
          basic={false}
          pro={false}
          business={true}
          className="grid grid-cols-[26rem_1fr_1fr_1fr] gap-x-[2em] justify-items-center border-b border-solid border-[#DFDFDF] pb-6  uppercase items"
        />
        <CompareItems
          feature="custom analytics"
          basic={false}
          pro={false}
          business={true}
          className="grid grid-cols-[26rem_1fr_1fr_1fr] gap-x-[2em] justify-items-center border-b border-solid border-[#DFDFDF] pb-6  uppercase items"
        />
      </section>
    </main>
  );
}

export default ComparisonTable;
