import React from "react";

const MultiLevelDropdown = () => {
  return (
    <div className="group inline-block relative">
      <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
        <span className="pr-1 font-semibold flex-1">Dropdown</span>
        <span>
          <svg
            className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </button>
      <ul className="bg-white border rounded-sm absolute left-0 mt-2 w-32 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top">
        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
        <li className="relative px-3 py-1 hover:bg-gray-100">
          <button className="w-full text-left flex items-center outline-none focus:outline-none">
            <span className="pr-1 flex-1">Languages</span>
            <span className="mr-auto">
              <svg
                className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul className="bg-white border rounded-sm absolute left-full top-0 mt-0 w-32 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-left">
            <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
            <li className="relative px-3 py-1 hover:bg-gray-100">
              <button className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">Python</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul className="bg-white border rounded-sm absolute left-full top-0 mt-0 w-32 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-left">
                <li className="px-3 py-1 hover:bg-gray-100">2.7</li>
                <li className="px-3 py-1 hover:bg-gray-100">3+</li>
              </ul>
            </li>
            <li className="px-3 py-1 hover:bg-gray-100">Go</li>
            <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
          </ul>
        </li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
      </ul>
    </div>
  );
};

export default MultiLevelDropdown;
