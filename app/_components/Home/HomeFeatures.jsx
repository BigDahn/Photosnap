import Image from "next/image";

const features = [
  {
    title: "100% Responsive",
    content:
      "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    image: "/assets/features/desktop/responsive.svg",
  },
  {
    title: "No Photo Upload Limit",
    content:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    image: "/assets/features/desktop/no-limit.svg",
  },
  {
    title: "Available to Embed",
    content:
      "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
    image: "/assets/features/desktop/embed.svg",
  },
];

function HomeFeatures() {
  return (
    <section className="flex gap-x-[0.7em]  items-center justify-center py-[6em] max-w-[1110px]  m-auto">
      {features.map((feature, index) => {
        const { title, content, image } = feature;

        return (
          <div
            key={index}
            className={`flex flex-col ${
              index === 0
                ? "gap-[2.6em]"
                : index === 1
                ? "gap-[5em]"
                : "gap-[1em]"
            }  h-[236px]    items-center justify-center max-w-[1110px]`}
          >
            <Image
              src={image}
              alt={title}
              height={0}
              width={0}
              className={
                index === 0
                  ? "h-[72px] w-[72px]"
                  : index === 1
                  ? "h-[36px] w-[72px]"
                  : "h-[72px] w-[71px]  relative bottom-[13%]"
              }
            />

            <div className="flex flex-col items-center justify-end  gap-[1em]  ">
              <h2 className="font-bold text-[18px] leading-[25px]">{title}</h2>
              <p className=" text-center font-normal text-[15px] leading-[25px] text-black/50">
                {content}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default HomeFeatures;
