
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

function Footer() {
  
  const footerLink = [
    {
      id: 1,
      path: "",
      text: "Yardım",
    },
    {
      id: 2,
      path: "",
      text: "Layihə Haqqında",
    },
    {
      id: 3,
      path: "",
      text: "Qaydalar",
    },
    {
      id: 4,
      path: "",
      text: "İstifadəçi razılaşması",
    },
    {
      id: 5,
      path: "",
      text: "Məxfilik siyasəti",
    },
  ];
  return (
    <footer className="py-3 px-5 md:px-[15vw] text-neutral-400">
      <div className="hidden md:flex justify-between">
        <Link href="/" className="text-[25px] font-bold text-orange-500">
          tap.az
        </Link>

        <div className="flex md:flex-row flex-col gap-4">
          <p className=" font-semibold hover:text-orange-500">{`(012) 526-19-19`}</p>
          <p className=" font-semibold hover:text-orange-500">tap@tap.az</p>
          <FaFacebookF className="text-neutral-400 font-semibold text-xl hover:text-orange-500" />
          <FaInstagram className="text-neutral-400 font-semibold text-2xl hover:text-orange-500" />
        </div>
      </div>
      <hr className="text-neutral-300 my-4 md:block hidden" />
      <div className="flex  justify-between text-neutral-400 text-[15px] mr-20">
        <div className="hidden md:flex justify-between gap-2 items-center hover:text-orange-500 cursor-pointer">
          <GrLanguage className="text-xl" />
          <p>Русский язык</p>
        </div>
        <div className="flex md:flex-row flex-col justify-between w-[80%]">
          {footerLink.map((item) => {
            return (
              <Link
                href={item.path}
                key={item.id}
                className="hover:text-orange-500 "
              >
                {item.text}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="text-neutral-400 hover:text-orange-500  text-[15px] ml-0 md:ml-42 mt-2">
        <Link href={"/"}>Ümumi oferta müqaviləsi</Link>
      </div>

      <hr className="md:block hidden text-neutral-400 w-full" />

      <div className="mt-5 md:w-full w-[85%] flex flex-col-reverse md:flex-col gap-1 text-[14px] md:text-[15px]">
        <p>&copy; 2008- Digital Classifield MMC. VÖEN: 1405631661</p>
        <p>
          Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş
          elanların məzmununa görə məsuliyyət daşımır.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
