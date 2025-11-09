import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading";

const Hero = dynamic(() => import("./_components/Home/Hero"));
const Hero2 = dynamic(() => import("./_components/Home/BeautifulStories"));
const Hero3 = dynamic(() => import("./_components/Home/DesignedForEveryOne"));
const Story = dynamic(() => import("./_components/Home/HomeStories"));
const Features = dynamic(() => import("./_components/Home/HomeFeatures"));

function page() {
  return (
    <div className=" m-auto flex flex-col justify-center">
      <Hero />
      <Hero2 />
      <Hero3 />
      <Story />
      <Features />
    </div>
  );
}

export default page;
