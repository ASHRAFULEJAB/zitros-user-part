import logo from "../assets/images/logo.png";
import MultiLevelDropdown from "./MultiLevelDropdown";

const Navbar = () => {
  return (
    <div>
      <nav
        className="relative flex w-full flex-wrap items-center justify-between
       bg-[#FBFBFB] py-2 text-neutral-500  hover:text-neutral-700
        focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="flex">
            <a
              className="mx-2  flex items-center text-neutral-900 hover:text-neutral-900
               focus:text-neutral-900 lg:mb-0 lg:mt-0"
              href="#"
            >
              <img
                className="mr-2 h-16"
                src={logo}
                alt="TE Logo"
                loading="lazy"
              />
            </a>
            <form className="hidden md:flex flex-auto items-center relative">
              <MultiLevelDropdown />

              <div className="relative">
                <input
                  type="search"
                  className="block w-[350px] min-w-0 rounded border border-solid border-neutral-300
                   bg-transparent
                 bg-clip-padding pl-8 pr-2 text-base font-normal mb-1 leading-[1.9] text-neutral-700 
                 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary
                 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)]
                 focus:outline-none dark:border-neutral-500 dark:text-neutral-200
                 dark:placeholder:text-neutral-200 dark:focus:border-primary
                 motion-reduce:transition-none"
                  placeholder="Search for product, brand, and more"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />

                <span className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 text-neutral-700 dark:text-neutral-200"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </form>
          </div>

          <ul
            className="list-style-none mx-auto hidden flex-row pl-0 md:flex  justify-between"
            data-te-navbar-nav-ref
          >
            <li className="px-2 " data-te-nav-item-ref>
              <a
                className="flex mr-1 items-center justify-center text-neutral-500 transition duration-200
                 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700
                  disabled:text-black/30 dark:text-neutral-200
                   dark:hover:text-neutral-300 dark:focus:text-neutral-300
                    [&.active]:text-black/90 dark:[&.active]:text-neutral-400 
                    motion-reduce:transition-none"
                data-te-nav-link-ref
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                </svg>
                <span className=" text-black">Login</span>
              </a>
            </li>
            <li className="px-2 ml-10" data-te-nav-item-ref>
              <a
                className="flex mr-1 items-center justify-center text-neutral-500 transition duration-200
                 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700
                  disabled:text-black/30 dark:text-neutral-200
                   dark:hover:text-neutral-300 dark:focus:text-neutral-300
                    [&.active]:text-black/90 dark:[&.active]:text-neutral-400 
                    motion-reduce:transition-none"
                data-te-nav-link-ref
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                </svg>
                <span className=" text-black">Cart</span>
              </a>
            </li>
            <li className="px-2 ml-10 " data-te-nav-item-ref>
              <a
                className="flex mr-1 items-center justify-center text-neutral-500 transition duration-200
                 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700
                  disabled:text-black/30 dark:text-neutral-200
                   dark:hover:text-neutral-300 dark:focus:text-neutral-300
                    [&.active]:text-black/90 dark:[&.active]:text-neutral-400 
                    motion-reduce:transition-none"
                data-te-nav-link-ref
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                </svg>
                <span className=" text-black">Become a Seller</span>
              </a>
            </li>
          </ul>

          <ul
            className="list-style-none ml-auto flex flex-row pl-0 md:pl-4"
            data-te-navbar-nav-ref
          >
            <li
              className="relative px-2"
              data-te-dropdown-ref
              data-te-dropdown-alignment="end"
            >
              <a
                className="hidden-arrow mr flex items-center text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 motion-reduce:transition-none"
                id="dropdownMenuButton1"
                role="button"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06 0l3.71 3.938a.75.75 0 001.08 0l3.71-3.938a.75.75 0 111.06 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
