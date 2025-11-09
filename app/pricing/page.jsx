import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../_components/Pricing/Hero"));
const Subscription = dynamic(() =>
  import("../_components/Pricing/Subscription")
);
const Beta = dynamic(() => import("../_components/Beta"));

const Compare = dynamic(() => import("../_components/Pricing/ComparisonTable"));

function page() {
  return (
    <div>
      <Hero />
      <Subscription />
      <Compare />
      <Beta />
    </div>
  );
}

export default page;
