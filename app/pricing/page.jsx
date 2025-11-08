import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../_components/Pricing/Hero"));
const Subscription = dynamic(() =>
  import("../_components/Pricing/Subscription")
);
const Beta = dynamic(() => import("../_components/Beta"));

function page() {
  return (
    <div>
      <Hero />
      <Subscription />
      <Beta />
    </div>
  );
}

export default page;
