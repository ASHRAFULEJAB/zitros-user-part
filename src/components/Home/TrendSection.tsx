import Trends1 from "../../assets/images/trend1.png";
import Trends2 from "../../assets/images/trends2.png";
import Trends3 from "../../assets/images/trends3.png";

const TrendSection = () => {
  return (
    <div className="bg-[#d8defb] p-6 ">
      <h1 className="text-black font-bold text-2xl mx-auto text-center">
        Catch The Latest Trends
      </h1>{" "}
      <div className="grid-cols-1 sm:grid md:grid-cols-3 lg:ml-16 ">
        <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className="rounded-2xl h-56" src={Trends1} alt="Skyscrapers" />
          </a>
          <div className="py-3">
            <h5 className="mb-2 lg:ml-6 text-xl font-medium leading-tight">
              January must-have
            </h5>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className="rounded-2xl h-56" src={Trends2} alt="Skyscrapers" />
          </a>
          <div className="py-3">
            <h5 className="lg:ml-3 mb-2 text-xl font-medium leading-tight">
              This Hue is set to make <br />{" "}
              <span className="lg:ml-5">your 2024 peachy</span>
            </h5>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className="rounded-2xl h-56" src={Trends3} alt="Skyscrapers" />
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

export default TrendSection;
