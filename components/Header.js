import Image from "next/image";
import Logo from "../public/images/logo.png";
import { BiCaretDown } from "react-icons/bi";
import { MdOutlineMenu } from "react-icons/md";

function Header() {
  return (
    <div className="bg-white border-b">
      <div className="container flex justify-between lg:justify-start items-center lg:gap-[226px] text-sm">
        <div className="">
          <Image src={Logo} alt="logo" height={48} priority />
        </div>

        <div className="hidden lg:flex items-center gap-[227px]">
          <div className="mt-4 flex divide-x">
            <div className="flex gap-[10px] pr-5">
              <span className="text-custom-red2 font-bold">English</span>
              <span className="text-custom-blue3 flex flex-col items-center cursor-pointer">
                <p className="">Language</p>
                <BiCaretDown size={14} className="-mt-1" />
              </span>
            </div>
            <div className="pl-5">
              <span className="text-custom-blue3 flex flex-col items-center cursor-pointer">
                <p className="">Change Location</p>
                <BiCaretDown size={14} className="-mt-1" />
              </span>
            </div>
          </div>

          <div className="flex gap-8 text-[15px]">
            <p className="text-custom-gray2 cursor-pointer">Login</p>
            <p className="text-custom-red2 cursor-pointer">Advertise</p>
            <p className="text-custom-gray2 cursor-pointer">Feedback</p>
          </div>
        </div>

        <div className="lg:hidden py-2">
          <div className=" px-2 py-1 rounded border">
            <MdOutlineMenu size={29} className="fill-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
