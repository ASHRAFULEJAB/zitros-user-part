import latest1 from "../../assets/images/latest1.png";
import latest2 from "../../assets/images/latest2.png";
import latest3 from "../../assets/images/lastest3.png";
import { Button } from "../ui/button";

const UnveilSection = () => {
  return (
    <div className="bg-[#71e679] p-8 ">
      <h1 className="text-black font-bold text-4xl r">Unveil the Latest</h1>{" "}
      <p className="text-[16px] my-3">Discover Our New Items Today.</p>
      <Button className="bg-white text-black mb-6">New Arrivals</Button>
      <div className="grid-cols-1 sm:grid md:grid-cols-3 lg:ml-16 ">
        <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className=" h-56" src={latest1} alt="Skyscrapers" />
          </a>
          <div className="py-3">
            <h5 className="mb-2 lg:ml-6 text-xl font-medium leading-tight">
              Here For Home
            </h5>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className=" h-56" src={latest2} alt="Skyscrapers" />
          </a>
          <div className="py-3">
            <h5 className="lg:ml-3 mb-2 text-xl font-medium leading-tight">
              Women’s Style
            </h5>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className=" h-56" src={latest3} alt="Skyscrapers" />
          </a>
          <div className="py-3">
            <h5 className="lg:ml-12 mb-2 text-xl font-medium leading-tight">
              Feel organized
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnveilSection;
