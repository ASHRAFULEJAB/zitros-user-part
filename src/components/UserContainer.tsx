import Footer from "./Footer";
import Clearence from "./Home/Clearence";
import LookAndSpaceSection from "./Home/LookAndSpaceSection";
import MiddleHero from "./Home/MiddleHero";
import MoviesSection from "./Home/MoviesSection";
import SaveOfferBanner from "./Home/SaveOfferBanner";
import TopHeroSection from "./Home/TopHeroSection";
import Navbar from "./Navbar";

const UserContainer = () => {
  return (
    <div>
      <div className="  mb-5 ">
        <Navbar />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          <TopHeroSection />
          <MiddleHero />
          <MoviesSection />
          <LookAndSpaceSection />
          <Clearence />
          <SaveOfferBanner />
        </div>
        <Footer />
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{' '}
        </div> */}
      </div>
    </div>
  );
};

export default UserContainer;
