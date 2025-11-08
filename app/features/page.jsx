import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../_components/Features/Hero"));
const Features = dynamic(() => import("../_components/Features/FullFeatures"));
const Beta = dynamic(() => import("../_components/Features/Beta"));

function page() {
  return (
    <div>
      <Hero />
      <Features />
      <Beta />
    </div>
  );
}

export default page;
