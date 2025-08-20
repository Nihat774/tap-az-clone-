import Link from "next/link";
import { PiHeart } from "react-icons/pi";
import { FaThLarge } from "react-icons/fa";
import Search from "../Search";
import { AiOutlineMessage } from "react-icons/ai";
import { RxPlusCircled } from "react-icons/rx";
import NavbarIcon from "../Navbar";
import { FaCirclePlus } from "react-icons/fa6";

function Header() {
  return (
    <header className="px-[12px] md:px-[30px] py-[12px] flex items-center justify-between z-50 sticky top-0 bg-white">
      <div className="flex gap-3 md:w-fit w-[60%] justify-between items-center cursor-pointer">
        <NavbarIcon />
        <Link href="/" className="text-[25px] font-bold text-orange-500">
          tap.az
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Link
          href="#"
          className="bg-orange-500 hover:bg-orange-600 duration-300 rounded-[14px] flex items-center justify-center py-[10px] px-[15px] gap-2"
        >
          <FaThLarge className="text-white" />
          <p className="text-white">Kataloq</p>
        </Link>
        <Search />
      </div>

      <div className="hidden md:flex gap-4">
        <Link
          href="/favorite"
          className="hover:bg-neutral-100 w-[40px] h-[45px] flex items-center justify-center  rounded-lg duration-300"
        >
          <PiHeart className="text-2xl" />
        </Link>

        <Link
          href="#"
          className="hover:bg-neutral-100 w-[40px] h-[45px] flex items-center justify-center  rounded-lg duration-300"
        >
          <AiOutlineMessage className="text-2xl" />
        </Link>
      </div>

      <div className="hidden md:flex gap-5">
        <Link
          href="#"
          className="rounded-[14px] bg-green-500 hover:bg-green-600 text-white py-2 px-4 flex items-center gap-1 text-lg duration-300"
        >
          <RxPlusCircled className="text-white text-lg" />
          <p className="hidden md:block">Yeni elan</p>
        </Link>

        
        <Link
          href="#"
          className="hidden md:flex text-center h-fit py-2 px-6 text-[16px] rounded-[14px] text-[#4c88f9] bg-[#dae8ff] hover:bg-[#f6f7fa] duration-300 "
        >
          Giriş
        </Link>
      </div>
      <Link href={"/"} className="md:hidden flex">
          <FaCirclePlus className="text-orange-500 text-2xl" />
        </Link>
    </header>
  );
}

export default Header;
