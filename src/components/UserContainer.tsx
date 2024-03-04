import Footer from "./Footer";
import Clearence from "./Home/Clearence";
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
          <Clearence />
          <SaveOfferBanner />
          <Footer />
        </div>
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{' '}
        </div> */}
      </div>
    </div>
  );
};

export default UserContainer;
