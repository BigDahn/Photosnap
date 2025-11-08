import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../_components/Stories/Hero"));
const Story = dynamic(() => import("../_components/Stories/Stories"));

function page() {
  return (
    <div>
      <Hero />
      <Story />
    </div>
  );
}

export default page;
