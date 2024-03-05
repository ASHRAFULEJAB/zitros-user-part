import looks1 from "../../assets/images/look1.png";
import looks2 from "../../assets/images/look1.png";
import looks3 from "../../assets/images/look1.png";
import space1 from "../../assets/images/space1.png";
import space2 from "../../assets/images/space2.png";
import space3 from "../../assets/images/space3.png";
import space4 from "../../assets/images/space4.png";

const LookAndSpaceSection = () => {
  return (
    <div>
      <div className="bg-[#d8defb] p-6 rounded-t-2xl">
        <h1 className="text-black font-bold text-2xl mx-auto text-center">
          Change Your Look
        </h1>{" "}
        <div className="grid-cols-1 sm:grid md:grid-cols-3 lg:ml-16">
          <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img className="rounded-t-lg" src={looks1} alt="Skyscrapers" />
            </a>
            <div className="py-3">
              <h5 className="mb-2 text-xl ml-4 font-medium leading-tight">
                Spend 500tk or more <br />{" "}
                <span className="ml-6"> Get a gift card</span>
              </h5>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img className="rounded-t-lg" src={looks2} alt="Skyscrapers" />
            </a>
            <div className="py-3">
              <h5 className="mb-2 lg:ml-16 text-xl font-medium leading-tight">
                Kids Wear
              </h5>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img className="rounded-t-lg" src={looks3} alt="Skyscrapers" />
            </a>
            <div className="py-3">
              <h5 className="mb-2 text-xl font-medium leading-tight lg:ml-24">
                Bags
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#d8defb] px-6 rounded-b-2xl">
        <h1 className="text-black font-bold text-2xl mx-auto text-center">
          Freahen Up Your Space
        </h1>{" "}
        <div className="grid-cols-1 sm:grid md:grid-cols-4 lg:ml-16">
          <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="rounded-t-lg  h-56"
                src={space1}
                alt="Skyscrapers"
              />
            </a>
            <div className="py-3">
              <h5 className="mb-2 text-xl ml-4 font-medium leading-tight">
                Select Storage
              </h5>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="rounded-t-lg  h-56"
                src={space2}
                alt="Skyscrapers"
              />
            </a>
            <div className="py-3">
              <h5 className="mb-2 lg:ml-16 text-xl font-medium leading-tight">
                Floor Care
              </h5>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="rounded-t-lg h-56 "
                src={space3}
                alt="Skyscrapers"
              />
            </a>
            <div className="py-3">
              <h5 className="mb-2 text-xl font-medium leading-tight lg:ml-3">
                Kichen Appliances
              </h5>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="rounded-t-lg  h-56"
                src={space4}
                alt="Skyscrapers"
              />
            </a>
            <div className="py-3">
              <h5 className="mb-2 text-xl font-medium leading-tight lg:ml-4">
                laundry detergent
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookAndSpaceSection;
