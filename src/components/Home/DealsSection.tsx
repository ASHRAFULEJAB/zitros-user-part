import deals1 from "../../assets/images/deals1.png";
import deals2 from "../../assets/images/deals2.png";
import deals3 from "../../assets/images/deals3.png";
import deals4 from "../../assets/images/deals4.png";

const DealsSection = () => {
  return (
    <div className=" p-6 rounded-2xl">
      <h1 className="text-black font-bold text-2xl mx-auto text-center">
        Deals You’ll Love
      </h1>{" "}
      <div className="grid-cols-1 sm:grid md:grid-cols-4 lg:ml-16 ">
        <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className="rounded-2xl h-64" src={deals1} alt="Skyscrapers" />
          </a>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className="rounded-2xl h-64" src={deals2} alt="Skyscrapers" />
          </a>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className="rounded-2xl h-64" src={deals3} alt="Skyscrapers" />
          </a>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className="rounded-2xl h-64" src={deals4} alt="Skyscrapers" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DealsSection;
