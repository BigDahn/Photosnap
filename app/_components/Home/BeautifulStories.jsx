import Image from "next/image";
import Link from "next/link";

function BeautifulStories() {
  return (
    <main className="flex h-[600px] w-full m-auto flex-row-reverse ">
      <div className=" text-black w-[45%]">
        <div className="max-w-[387px] flex flex-col gap-[3em] justify-center items-start m-auto h-full">
          <div className="flex flex-col gap-[0.6em]">
            <h2 className="font-bold uppercase text-[40px] tracking-[4.17px] leading-12 text-black ">
              BEAUTIFUL STORIES <br />
              EVERY TIME
            </h2>
            <p className="font-normal text-[15px]  leading-[25px] text-black/80 ">
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
          </div>
          <Link
            href="/stories"
            className="uppercase text-black flex text-[12px] tracking-[2px] font-bold leading-normal gap-[2em] items-center"
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

      <Image
        src="/assets/home/desktop/beautiful-stories.jpg"
        alt="hero"
        width={830}
        height={600}
        quality={75}
        className="w-[55%] h-auto"
        loading="eager"
      />
    </main>
  );
}

export default BeautifulStories;
