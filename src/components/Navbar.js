import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // const data = [
  //   "COMPANY",
  //   "SERVICES",
  //   "WORK",
  //   "INSIGHTS",
  //   "CAREERS",
  //   "CONTACT",
  // ];

  return (
    <>
      <div className="bg-white ">
        <div className="w-[100%] px-[5%] border-b-gray-400 h-20 flex justify-between items-center shadow-lg md:px-[2.5%] xl:px-[10%] 2xl:px-[12.5%]">
          <div className="">
            <img
              className="h-14 cursor-pointer"
              src="./pictures/logo.webp"
              alt=""
            />
          </div>
          <div className="lg:flex lg:justify-end lg:items-center">
            <div className="hidden lg:block">
              <ul className="flex">
                <li className="py-3 px-6 cursor-pointer">COMPANY</li>
                <li className="py-3 px-6 cursor-pointer">SERVICES</li>
                <li className="py-3 px-6 cursor-pointer">WORK</li>
                <li className="py-3 px-6 cursor-pointer">INSIGHTS</li>
                <li className="py-3 px-6 cursor-pointer">CAREERS</li>
                <li className="py-3 px-6 cursor-pointer border border-black hover:bg-[#0045a6] hover:text-white">
                  CONTACT
                </li>
              </ul>
            </div>
            <div className="flex">
              <FaSearch className="h-16 w-8  mx-5 xl:mx-8 text-[#0045a6] cursor-pointer" />
              <HiOutlineMenuAlt3
                className="h-16 w-10 lg:hidden cursor-pointer"
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            </div>
          </div>
        </div>
        {toggle && (
          <div className="absolute h-screen opacity-80 font-bold top-20 lg:hidden z-10 bg-white">
            <ul className="w-screen text-center">
              <li className=" py-3 tracking-wider cursor-pointer hover:bg-[#0045a6] hover:text-white">
                COMPANY
              </li>
              <li className=" py-3 tracking-wider cursor-pointer hover:bg-[#0045a6] hover:text-white">
                SERVICES
              </li>
              <li className=" py-3 tracking-wider cursor-pointer hover:bg-[#0045a6] hover:text-white">
                WORK
              </li>
              <li className=" py-3 tracking-wider cursor-pointer hover:bg-[#0045a6] hover:text-white">
                INSIGHTS
              </li>
              <li className=" py-3 tracking-wider cursor-pointer hover:bg-[#0045a6] hover:text-white">
                CAREERS
              </li>
              <li className=" py-3 tracking-wider cursor-pointer hover:bg-[#0045a6] hover:text-white">
                CONTACT
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* <div className="bg-white border-2 border-black  h-[456px]"></div> */}
    </>
  );
};

export default Navbar;
