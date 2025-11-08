import Image from "next/image";
import bg from "@/public/assets/stories/desktop/moon-of-appalacia.jpg";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative h-[650px] w-full">
      <Image src={bg} alt="hero" fill className="object-cover" quality={100} />
      <div className="max-w-[387px] relative flex flex-col gap-[2em] justify-center ml-[6em] w-full  h-full">
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
