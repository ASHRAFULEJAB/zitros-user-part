const MultiLevelDropdown = () => {
  return (
    <div className="">
      <details className="mb-2 relative items-center justify-center mt-5 mr-3">
        <summary className="bg-gray-200 flex   cursor-pointer  mb-4 ">
          <span className="font-semibold w-full px-6 py-1 text-black">
            Categories
          </span>
        </summary>
        <ul className="ml-8 z-50 mt-6  absolute bg-red-500 px-10 ">
          <li className="">
            <details className="mb-2 ">
              <summary className="flex justify-between cursor-pointer">
                <span className="font-semibold mr-6 text-black">Grocery</span>
                <span className="font-semibold  text-black">Grocery</span>
              </summary>
              <div className="bg-white ml-48 absolute">
                <p className="text-gray-800">Vegtable</p>
              </div>
            </details>
          </li>
          <li>
            <details className="mb-2">
              <summary className=" flex justify-between cursor-pointer ">
                <span className="font-semibold text-black">Mobile</span>
                <span className="font-semibold text-black">Mobile</span>
              </summary>
              <div className="bg-white ml-48 absolute px-5 ">
                <p className="text-gray-800">Iphone 30 pro max</p>
              </div>
            </details>
          </li>
          <li>
            <details className="mb-2">
              <summary className="  flex justify-between cursor-pointer ">
                <span className="font-semibold text-black">Health</span>
                <span className="font-semibold text-black">Health</span>
              </summary>
              <div className="bg-white ml-48 mt-10 absolute">
                <p className="text-gray-800">Medicine</p>
              </div>
            </details>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default MultiLevelDropdown;
