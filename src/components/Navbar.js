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
      <div className="bg-white sticky">
        <div className="w-[100%] px-[5%] border-b-gray-400 h-20 flex justify-between items-center shadow-lg md:px-[2.5%] xl:px-[10%] 2xl:px-[12.5%]">
          <div className="">
            <img className="h-14" src="./pictures/logo.webp" alt="" />
            {/* <h1 className="text-3xl font-bold">Logo</h1> */}
          </div>
          <div className="lg:flex lg:justify-end lg:items-center">
            <div className="hidden lg:block">
              <ul className="flex">
                <li className="py-3 px-6">COMPANY</li>
                <li className="py-3 px-6">SERVICES</li>
                <li className="py-3 px-6">WORK</li>
                <li className="py-3 px-6">INSIGHTS</li>
                <li className="py-3 px-6">CAREERS</li>
                <li className="py-3 px-6 border border-black hover:bg-[#0045a6] hover:text-white">
                  CONTACT
                </li>
              </ul>
            </div>
            <div className="flex">
              <FaSearch className="h-16 w-8  mx-5 xl:mx-8 text-[#0045a6]" />
              <HiOutlineMenuAlt3
                className="h-16 w-10 lg:hidden"
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            </div>
          </div>
        </div>
        {toggle && (
          <div className="relative top-5 lg:hidden z-10">
            <ul className="w-screen text-center">
              <li className=" py-3 tracking-wider hover:bg-[#0045a6] hover:text-white">
                COMPANY
              </li>
              <li className=" py-3 tracking-wider hover:bg-[#0045a6] hover:text-white">
                SERVICES
              </li>
              <li className=" py-3 tracking-wider hover:bg-[#0045a6] hover:text-white">
                WORK
              </li>
              <li className=" py-3 tracking-wider hover:bg-[#0045a6] hover:text-white">
                INSIGHTS
              </li>
              <li className=" py-3 tracking-wider hover:bg-[#0045a6] hover:text-white">
                CAREERS
              </li>
              <li className=" py-3 tracking-wider hover:bg-[#0045a6] hover:text-white">
                CONTACT
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
