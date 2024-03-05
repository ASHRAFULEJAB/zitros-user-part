import valentine from "../../assets/images/valentine.png";
import women from "../../assets/images/women.png";
import men from "../../assets/images/mans.png";
import kid from "../../assets/images/kids.png";
import baby from "../../assets/images/baby.png";
import home from "../../assets/images/home.png";
import garden from "../../assets/images/garden.png";
import kitchen from "../../assets/images/kitchen.png";
import storage from "../../assets/images/baseket.png";
import vediogame from "../../assets/images/vediogame.png";
import mobile from "../../assets/images/mobile.jpg";
import toyes from "../../assets/images/vediogame.png";
import sports from "../../assets/images/sports.png";
import grocery from "../../assets/images/groceryfeature.png";
import beauty from "../../assets/images/body.png";
import household from "../../assets/images/cleaner.png";
import pets from "../../assets/images/pets.png";
import clearence from "../../assets/images/clearence.png";

const FeaturedCategories = () => {
  return (
    <div>
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 className="mb-6 text-3xl font-bold">Featured Categories</h3>
        <p className="mb-6 pb-2 text-neutral-600 dark:text-neutral-300 md:mb-12 md:pb-0">
          Shop all
        </p>
      </div>

      <div className="grid gap-6 text-center md:grid-cols-6 lg:gap-12">
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={valentine}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">Valentine’s Day</h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={women}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">Women’s</h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={men}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">Men’s</h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={kid}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">Kid’s</h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={baby}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">Baby</h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={home}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">Home</h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={garden}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">Patio & Garden</h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={kitchen}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">Kitchen & Dining</h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={storage}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">
            Storage & Organization
          </h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={pets}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">Pets</h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={vediogame}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">Video Games</h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={mobile}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">Mobile</h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={toyes}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">Toys</h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={sports}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">Sports & Outdoors</h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={grocery}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">Grocery</h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={beauty}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">Beauty</h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={household}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">
            Household Essentials
          </h6>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src={clearence}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h6 className="mb-4 font-semibold text-black">Clearance</h6>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
