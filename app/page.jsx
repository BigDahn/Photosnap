import Hero from "./_components/Home/Hero";
import BeautifulStories from "./_components/Home/BeautifulStories";
import DesignedForEveryOne from "./_components/Home/DesignedForEveryOne";
import HomeStories from "./_components/Home/HomeStories";
import HomeFeatures from "./_components/Home/HomeFeatures";

function page() {
  return (
    <>
      <Hero />
      <BeautifulStories />
      <DesignedForEveryOne />
      <HomeStories />
      <HomeFeatures />
    </>
  );
}

export default page;
