import moves1 from "../../assets/images/movies1.png";
import moves2 from "../../assets/images/movies2.png";
import moves3 from "../../assets/images/movies3.png";
import moves4 from "../../assets/images/movies4.png";

const MoviesSection = () => {
  return (
    <div className="bg-[#c8d1ff] p-6 rounded-2xl">
      <h1 className="text-black font-bold text-2xl mx-auto text-center">
        Make New Moves
      </h1>{" "}
      <div className="grid-cols-1 sm:grid md:grid-cols-4 lg:ml-16 ">
        <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className="rounded-2xl h-56" src={moves1} alt="Skyscrapers" />
          </a>
          <div className="py-3">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Winter Collection
            </h5>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className="rounded-2xl h-56" src={moves2} alt="Skyscrapers" />
          </a>
          <div className="py-3">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Kids Zone
            </h5>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className="rounded-2xl h-56" src={moves3} alt="Skyscrapers" />
          </a>
          <div className="py-3">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Accessories
            </h5>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className="rounded-2xl h-56" src={moves4} alt="Skyscrapers" />
          </a>
          <div className="py-3">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Select an Electronics <br /> Item
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesSection;
