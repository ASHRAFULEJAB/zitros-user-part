import saveoffer from "../../assets/images/footerbanner.png";
const SaveOfferBanner = () => {
  return (
    <div className="my-3">
      <img src={saveoffer} alt="" className="w-full object-cover" />

      <footer className=" text-center text-surface dark:bg-neutral-700 dark:text-white">
        <div className="px-6 pt-6">
          <form>
            <div className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
              <div className="md:mb-6 md:ms-auto">
                <p>
                  <strong>Get Top Deals, Latest Trends, and More</strong>
                </p>
              </div>

              <div className="relative md:mb-6" data-twe-input-wrapper-init>
                <input
                  type="email"
                  className="peer block min-h-[auto] w-full rounded border border-gray-200
                   bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none 
                   transition-all duration-200 ease-linear focus:placeholder:opacity-100 
                   peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100
                    motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300
                     dark:autofill:shadow-autofill dark:peer-focus:text-primary
                      [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInputEmail2"
                  placeholder="Email address"
                />
                <label
                  htmlFor="exampleFormControlInputEmail2"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                >
                  Email address
                </label>
              </div>

              <div className="mb-6 md:me-auto">
                <button
                  type="button"
                  className="inline-block rounded bg-red-500 px-6 pb-2 pt-2.5
                   text-xs font-medium uppercase leading-normal text-white shadow-primary-3
                    transition duration-150 ease-in-out hover:bg-primary-accent-300 
                    hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 
                    focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2
                     dark:shadow-black/30 dark:hover:shadow-dark-strong 
                     dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Sign Up
                </button>
                  <u className="text-green-300 ml-3 cursor-pointer ">Privacy policy</u>
                <div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default SaveOfferBanner;
