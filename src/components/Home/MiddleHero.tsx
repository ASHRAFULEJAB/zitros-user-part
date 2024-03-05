import heroBanner from "../../assets/images/herobanner.png";
import middleBanner from "../../assets/images/heromiddle.png";

const MiddleHero = () => {
  return (
    <div>
      <section className="mb-10">
        <div className="bg-[#c8d1ff] px-6 py-6 rounded-2xl text-center dark:bg-neutral-900 md:px-12 lg:text-left">
          <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0">
                <h1 className="text-green-500 mt-2 mb-3 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                  Fashions Awards
                  <br />
                  <span className="text-green-500">Trends</span>
                </h1>

                <p
                  className="inline-block rounded  pb-3.5
                 text-sm font-medium uppercase  
                 transition duration-150 ease-in-out 
                 text-green-500"
                >
                  Elavate your closet with us
                </p>
              </div>
              <div className="mb-6 lg:mb-0">
                <img src={heroBanner} className="w-full rounded-lg " alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-[#9de1a2] px-6 py-1 mt-4 mb-4 rounded-2xl text-center
         dark:bg-neutral-900 md:px-12 lg:text-left"
        >
          <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0 ml-10 md:ml-28">
                <h1
                  className="text-black mt-2 mb-3 text-2xl 
                font-semibold tracking-tight md:text-3xl xl:text-3xl"
                >
                  Fresh <br />
                  Finds
                  <br />
                  <span className="text-black">Await</span>
                </h1>
              </div>
              <div className="mb-6 lg:mb-0 text-wrap text-[18px]">
                <span className="ml-2">
                  {" "}
                  Embark on a journey of discovery with our latest
                </span>{" "}
                <br /> arrivals, offering fresh and exciting items to elevate{" "}
                <br />
                <span className="text-center ml-36"> your experience</span>.
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#cff8d2] px-6 py-6 rounded-2xl text-center 
        dark:bg-neutral-900 md:px-12 lg:text-left">
          <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-3xl xl:max-w-3xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0">
                <h1
                  className="text-black mt-2 mb-3 text-2xl 
                font-bold tracking-tight md:text-2xl xl:text-2xl"
                >
                  Explore Our Latest Arrivals and
                  <br />
                  <span className="text-black">Elevate Your Experience!</span>
                </h1>

                <p
                  className="inline-block rounded  pb-3.5
                 text-sm font-medium uppercase  
                 transition duration-150 ease-in-out 
                 text-black"
                >
                  Dive into the World of Our New Collections!
                </p>
              </div>
              <div className="mb-6 lg:mb-0">
                <img src={middleBanner} className="w-full  " alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiddleHero;
