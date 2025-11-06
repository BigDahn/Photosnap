import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    title: "The Mountains",
    author: "John Appleseed",
    image: {
      desktop: "/assets/stories/desktop/mountains.jpg",
      mobile: "/assets/stories/mobile/mountains.jpg",
    },
  },
  {
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    image: {
      desktop: "/assets/stories/desktop/cityscapes.jpg",
      mobile: "/assets/stories/mobile/cityscapes.jpg",
    },
  },
  {
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    image: {
      desktop: "/assets/stories/desktop/18-days-voyage.jpg",
      mobile: "/assets/stories/mobile/18-days-voyage.jpg",
    },
  },
  {
    title: "Architecturals",
    author: "Samantha Brooke",
    image: {
      desktop: "/assets/stories/desktop/architecturals.jpg",
      mobile: "/assets/stories/mobile/architecturals.jpg",
    },
  },
];

function MiniStories() {
  return (
    <div className="flex">
      {stories.map((story, i) => {
        const { title, author, image } = story;
        const { desktop, mobile } = image;
        return (
          <div key={i} className="relative h-[500px] w-full">
            <Image
              src={desktop}
              alt={title}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-cover"
            />
            <div className="absolute top-[74%] m-auto flex flex-col gap-[1em] justify-start px-[3em] w-full">
              <div>
                <h1 className="text-white font-bold text-[18px] leading-[25px]">
                  {title}
                </h1>
                <p className="text-white/80 font-medium text-[13px]">
                  by {author}
                </p>
              </div>
              <div className="border-b-2 border-white/40"></div>
              <div className="flex justify-between items-center">
                <Link
                  href="/stories"
                  className="text-white font-bold text-[12px] tracking-[2px] uppercase"
                >
                  read story
                </Link>
                <Image
                  src="/assets/shared/desktop/arrow.svg"
                  alt="arrow"
                  height={12}
                  width={42}
                  style={{ filter: "invert(100%)" }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MiniStories;
