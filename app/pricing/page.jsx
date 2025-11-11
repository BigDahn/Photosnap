import Hero from "../_components/Pricing/Hero";
import Subscription from "../_components/Pricing/Subscription";
import Beta from "../_components/Beta";
import ComparisonTable from "../_components/Pricing/ComparisonTable";

function page() {
  return (
    <>
      <Hero />
      <Subscription />
      <ComparisonTable />
      <Beta />
    </>
  );
}

export default page;
