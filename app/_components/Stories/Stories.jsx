import Image from "next/image";
import Link from "next/link";
import React from "react";

const wholeStory = [
  {
    title: "The Mountains",
    date: "April 16th 2020",
    author: "John Appleseed",
    image: {
      desktop: "/assets/stories/desktop/mountains.jpg",
      mobile: "/assets/stories/mobile/mountains.jpg",
    },
  },
  {
    title: "Sunset Cityscapes",
    date: "April 14th 2020",
    author: "Benjamin Cruz",
    image: {
      desktop: "/assets/stories/desktop/cityscapes.jpg",
      mobile: "/assets/stories/mobile/cityscapes.jpg",
    },
  },
  {
    title: "18 Days Voyage",
    date: "April 11th 2020",
    author: "Alexei Borodin",
    image: {
      desktop: "/assets/stories/desktop/18-days-voyage.jpg",
      mobile: "/assets/stories/mobile/18-days-voyage.jpg",
    },
  },
  {
    title: "Architecturals",
    date: "April 9th 2020",
    author: "Samantha Brooke",
    image: {
      desktop: "/assets/stories/desktop/architecturals.jpg",
      mobile: "/assets/stories/mobile/architecturals.jpg",
    },
  },
  {
    title: "World Tour 2019",
    date: "April 7th 2020",
    author: "Timothy Wagner",
    image: {
      desktop: "/assets/stories/desktop/world-tour.jpg",
      mobile: "/assets/stories/mobile/world-tour.jpg",
    },
  },
  {
    title: "Unforeseen Corners",
    date: "April 3rd 2020",
    author: "William Malcolm",
    image: {
      desktop: "/assets/stories/desktop/unforeseen-corners.jpg",
      mobile: "/assets/stories/mobile/unforeseen-corners.jpg",
    },
  },
  {
    title: "King on Africa: Part II",
    date: "March 29th 2020",
    author: "Tim Hillenburg",
    image: {
      desktop: "/assets/stories/desktop/king-on-africa.jpg",
      mobile: "/assets/stories/mobile/king-on-africa.jpg",
    },
  },
  {
    title: "The Trip to Nowhere",
    date: "March 21st 2020",
    author: "Felicia Rourke",
    image: {
      desktop: "/assets/stories/desktop/trip-to-nowhere.jpg",
      mobile: "/assets/stories/mobile/trip-to-nowhere.jpg",
    },
  },
  {
    title: "Rage of The Sea",
    date: "March 19th 2020",
    author: "Mohammed Abdul",
    image: {
      desktop: "/assets/stories/desktop/rage-of-the-sea.jpg",
      mobile: "/assets/stories/mobile/rage-of-the-sea.jpg",
    },
  },
  {
    title: "Running Free",
    date: "March 16th 2020",
    author: "Michelle",
    image: {
      desktop: "/assets/stories/desktop/running-free.jpg",
      mobile: "/assets/stories/mobile/running-free.jpg",
    },
  },
  {
    title: "Behind the Waves",
    date: "March 11th 2020",
    author: "Lamarr Wilson",
    image: {
      desktop: "/assets/stories/desktop/behind-the-waves.jpg",
      mobile: "/assets/stories/mobile/behind-the-waves.jpg",
    },
  },
  {
    title: "Calm Waters",
    date: "March 9th 2020",
    author: "Samantha Brooke",
    image: {
      desktop: "/assets/stories/desktop/calm-waters.jpg",
      mobile: "/assets/stories/mobile/calm-waters.jpg",
    },
  },
  {
    title: "The Milky Way",
    date: "March 5th 2020",
    author: "Benjamin Cruz",
    image: {
      desktop: "/assets/stories/desktop/milky-way.jpg",
      mobile: "/assets/stories/mobile/milky-way.jpg",
    },
  },
  {
    title: "Night at The Dark Forest",
    date: "March 4th 2020",
    author: "Mohammed Abdul",
    image: {
      desktop: "/assets/stories/desktop/dark-forest.jpg",
      mobile: "/assets/stories/mobile/dark-forest.jpg",
    },
  },
  {
    title: "Somwarpet’s Beauty",
    date: "March 1st 2020",
    author: "Michelle",
    image: {
      desktop: "/assets/stories/desktop/somwarpet.jpg",
      mobile: "/assets/stories/mobile/somwarpet.jpg",
    },
  },
  {
    title: "Land of Dreams",
    date: "February 25th 2020",
    author: "William Malcolm",
    image: {
      desktop: "/assets/stories/desktop/land-of-dreams.jpg",
      mobile: "/assets/stories/mobile/land-of-dreams.jpg",
    },
  },
];

function Stories() {
  return (
    <div className="grid grid-cols-4">
      {wholeStory.map((story, i) => {
        const { title, author, image, date } = story;
        const { desktop, mobile } = image;
        return (
          <div key={i} className="relative h-[500px] w-full">
            <Image
              src={desktop}
              alt={title}
              quality={100}
              //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-cover brightness-40"
            />
            <div className="absolute top-[73%] m-auto flex flex-col gap-[1em] justify-start px-[3em] w-full">
              <div>
                <h3 className="text-white/80 font-medium text-[13px]">
                  {date}
                </h3>
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

export default Stories;
