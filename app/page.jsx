import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./_components/Hero"));
const Hero2 = dynamic(() => import("./_components/HeroComp"));
const Hero3 = dynamic(() => import("./_components/MoreComp"));
const Story = dynamic(() => import("./_components/MiniStories"));
const Features = dynamic(() => import("./_components/HomeFeatures"));

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
