import { IoLogoFacebook } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { RxTwitterLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <>
      <div className="bg-[#202022] text-white px-[10%] sm:px-[20%] md:px-0 lg:px-[10%] xl:px-[15%]">
        <div className="md:flex md:px-[5%] md:justify-around md:border-b-2 md:border-white">
          <div className="flex flex-col justify-center items-center py-10 border-b-2 border-white md:w-[30%] md:border-0">
            <img className="w-40 py-5" src="./pictures/logoend.svg " alt="" />
            <p className="text-center text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              dolor ullam optio doloremque consectetur reiciendis obcaecati quo
              ducimus
            </p>
          </div>
          <div className=" py-5 border-b-2 border-white md:w-[30%] md:border-0 md:pt-20">
            <ul className="flex flex-wrap justify-end">
              <li className="w-[48%] text-center py-2 font-bold">company</li>
              <li className="w-[48%] text-center py-2 font-bold">insights</li>
              <li className="w-[48%] text-center py-2 font-bold">services</li>
              <li className="w-[48%] text-center py-2 font-bold">company</li>
              <li className="w-[48%] text-center py-2 font-bold">insights</li>
              <li className="w-[48%] text-center py-2 font-bold">services</li>
            </ul>
          </div>
          <div className=" py-5 border-b-2 border-white md:w-[30%] md:border-0 md:pt-20 ">
            <ul className="flex flex-wrap justify-end">
              <li className="w-[48%] text-center py-2 font-bold">Lahore</li>
              <li className="w-[48%] text-center py-2 font-bold">Rawalpindi</li>
              <li className="w-[48%] text-center py-2 font-bold">Islamabad</li>
              <li className="w-[48%] text-center py-2 font-bold">Hydrabad</li>
              <li className="w-[48%] text-center py-2 font-bold">Laknow</li>
              <li className="w-[48%] text-center py-2 font-bold">Amritsar</li>
              <li className="w-[48%] text-center py-2 font-bold">USA</li>
              <li className="w-[48%] text-center py-2 font-bold">England</li>
            </ul>
          </div>
        </div>
        <div className=" py-5 flex flex-col justify-center items-center md:flex-row md:justify-between md:px-[10%]">
          <p className="py-1">+1-703-935-1919</p>
          <p className="py-1"> info@10pearls.com</p>
          <div>
            <div className="py-2 pt-8 flex md:py-0 md:pt-0">
              <span>
                <IoLogoFacebook className="my-2 h-10 w-10 mx-3 md:h-12 md:w-12 lg:h-8 lg:w-8 cursor-pointer xl:my-5 2xl:my-10" />
              </span>
              <span>
                <RxTwitterLogo className="my-2 h-10 w-10 mx-3 md:h-12 md:w-12 lg:h-8 lg:w-8 cursor-pointer xl:my-5 2xl:my-10" />
              </span>
              <span>
                <GrInstagram className="my-2 h-10 w-10 mx-3 md:h-12 md:w-12 lg:h-8 lg:w-8 cursor-pointer xl:my-5 2xl:my-10" />
              </span>
            </div>
          </div>
          <p>Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
