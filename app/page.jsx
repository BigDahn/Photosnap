import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./_components/Home/Hero"));
const Hero2 = dynamic(() => import("./_components/Home/BeautifulStories"));
const Hero3 = dynamic(() => import("./_components/Home/DesignedForEveryOne"));
const Story = dynamic(() => import("./_components/Home/HomeStories"));
const Features = dynamic(() => import("./_components/Home/HomeFeatures"));

function page() {
  return (
    <div className="">
      <Hero />
      <Hero2 />
      <Hero3 />
      <Story />
      <Features />
    </div>
  );
}

export default page;
