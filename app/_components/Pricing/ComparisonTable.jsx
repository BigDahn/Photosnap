import React from "react";
import CompareItems from "./CompareItems";

function ComparisonTable() {
  return (
    <main className="max-w-[1110px] m-auto flex flex-col items-center pt-[3em] pb-[8em] gap-[2em]">
      <h1 className="font-bold uppercase text-[40px] leading-12 tracking-[4.17px]">
        compare
      </h1>
      <section className="max-w-[731px] flex flex-col justify-center mx-auto gap-9">
        <div className="grid grid-cols-[26rem_1fr_1fr_1fr] gap-x-[2em] justify-items-center border-b border-solid border-black pb-6  uppercase ">
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
        />
        <CompareItems
          feature="unlimited photo upload"
          basic={true}
          pro={true}
          business={true}
        />
        <CompareItems
          feature="embedding custom content"
          basic={false}
          pro={true}
          business={true}
        />
        <CompareItems
          feature="customize metadata"
          basic={false}
          pro={true}
          business={true}
        />
        <CompareItems
          feature="advanced metrics"
          basic={false}
          pro={false}
          business={true}
        />
        <CompareItems
          feature="photo downloads"
          basic={false}
          pro={false}
          business={true}
        />
        <CompareItems
          feature="search engine indexing"
          basic={false}
          pro={false}
          business={true}
        />
        <CompareItems
          feature="custom analytics"
          basic={false}
          pro={false}
          business={true}
        />
      </section>
    </main>
  );
}

export default ComparisonTable;
