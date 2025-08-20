"use client";
import { useState } from "react";
import { PiListBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { SlGlobe } from "react-icons/sl";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

function NavbarIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const navLink1 = [
    {
      path: "",
      text: "Mağazalar",
    },
    {
      path: "",
      text: "Yardım",
    },
    {
      path: "",
      text: "Biznes",
    },
  ];

  const navLink2 = [
    {
      path: "",
      text: "Layihə haqqında",
    },
    {
      path: "",
      text: "Istifadçi razılaşması",
    },
    {
      path: "",
      text: "Məxfilik siyasəti",
    },
    {
      path: "",
      text: "Reklam yerləşdirin",
    },
  ];

  return (
    <>
      <nav>
        {isOpen ? (
          <IoMdClose
            className="text-orange-500 text-2xl font-semibold"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <PiListBold
            className="text-orange-500 text-2xl font-semibold"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        {isOpen ? (
          <>
            <div className="z-40 bg-white flex md:flex-row flex-col justify-between p-5 md:-mx-[30px] md:px-[160px] py-[30px] border-y border-neutral-200 h-[100vh] md:h-[40vh] w-[80%] md:w-full absolute top-0 left-0 md:top-[12vh]">
              <div className="md:hidden flex justify-between">
                <Link
                  href="/"
                  className="text-[25px] font-bold text-orange-500"
                >
                  tap.az
                </Link>
                <IoCloseOutline className="text-neutral-500 text-4xl" onClick={() => setIsOpen(!isOpen)} />
              </div>
              <div className="flex md:flex-row flex-col w-[80%] md:w-[40%] justify-between ">
                <div className="flex flex-col gap-6 h-full">
                  {navLink1.map((item, index) => {
                    return (
                      <Link
                      onClick={() => setIsOpen(!isOpen)}
                        href={item.path}
                        key={index}
                        className="text-[16px] duration-300 hover:text-orange-500"
                      >
                        {item.text}
                      </Link>
                    );
                  })}
                </div>

                <div className="flex flex-col  gap-6">
                  {navLink2.map((item, index) => {
                    return (
                      <Link
                      onClick={() => setIsOpen(!isOpen)}
                        href={item.path}
                        key={index}
                        className="text-[16px] duration-300 hover:text-orange-500"
                      >
                        {item.text}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end gap-5 md:gap-4">
                <Link
                  href=""
                  className="flex gap-1 items-center hover:text-orange-500 duration-300"
                >
                  <SlGlobe />
                  <p>Русский язык</p>
                </Link>

                <div className="flex flex-col justify-center items-start md:items-end">
                  <p className="text-neutral-400 text-[16px]">Bizimlə əlaqə</p>
                  <Link
                    href="#"
                    className="flex gap-1 items-center hover:text-orange-500 duration-300"
                  >
                    <FaPhoneAlt className="text-xl" />
                    <p>(012 526-19-19)</p>
                  </Link>
                </div>

                <Link href="#" className="hover:text-orange-500">
                  tap@tap.az
                </Link>
                <div className="flex items-center gap-3">
                  <FaFacebookF className="text-2xl hover:text-orange-500 duration-200" />
                  <FaInstagram className="text-2xl hover:text-orange-500 duration-200" />
                </div>
              </div>
            </div>
          </>
        ) : null}
      </nav>
      {isOpen ? (
        <>
          <div
            className="fixed left-0 right-0 bottom-0 top-0 md:top-[90px] bg-black opacity-40 z-20"
            onClick={() => setIsOpen(!isOpen)}
          ></div>
        </>
      ) : null}
    </>
  );
}

export default NavbarIcon;
