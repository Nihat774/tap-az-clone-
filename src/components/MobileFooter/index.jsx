import Link from "next/link";
import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdHome } from "react-icons/md";

function MobileFooter() {
  const footer = [
    {
      id: 1,
      icon: <MdHome className="text-neutral-400 text-2xl" />,
      path:"/",
      text: "ƏSAS",
    },
    {
      id: 2,
      path:"/favorite",
      icon: <GoHeartFill className="text-neutral-400 text-2xl" />,
      text: "SEÇİLMİŞLƏR",
    },
    {
      id: 3,
      path:"",
      icon: (
        <FaCirclePlus className="text-orange-600 text-5xl absolute z-50 right-0 bottom-6 " />
      ),
      text: "YENI ELAN",
    },
    {
      id: 4,
      path:"",
      icon: <AiFillMessage className="text-neutral-400 text-2xl" />,
      text: "MESAJLAR",
    },
    {
      id: 5,
      path:"",
      icon: <FaUserCircle className="text-neutral-400 text-2xl" />,
      text: "KABINET",
    },
  ];
  return (
    <footer className="md:hidden flex justify-between p-3 sticky bottom-0 z-30 h-fit bg-white">
      {footer.map((item) => {
        return (
          <Link
            href={item.path}
            key={item.id}
            className={`${
              item.id == 3 ? "gap-6" : ""
            } flex relative flex-col items-center`}
          >
            <div>{item.icon}</div>
            <p className={`text-[10px] text-neutral-400`}>{item.text}</p>
          </Link>
        );
      })}
    </footer>
  );
}

export default MobileFooter;
