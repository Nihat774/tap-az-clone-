"use client";
import useStore from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { IoMdHeart } from "react-icons/io";
import { PiHeart } from "react-icons/pi";

function Favorite() {
  const handleRemove = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    removeData(item);
  };
  const favoritedData = useStore((state) => state.store);
  const removeData = useStore((state) => state.Remove);
  return (
    <section className="flex  flex-col items-center justify-center">
      <div className="pb-5 hidden md:block ">
        <div className="flex gap-2">
          <h1 className="font-semibold text-2xl">Seçilmişlər</h1>
          <p className="rounded-full text-xl text-orange-500  px-2  font-semibold border border-orange-500">
            {favoritedData.length}
          </p>
        </div>
      </div>
      {favoritedData.length == 0 ? (
        <div className="bg-white w-full flex flex-col gap-4 items-center justify-center h-[80vh] md:h-[52vh] rounded-sm">
          <Image
            src={"/favorite-empty.webp"}
            className=" md:hidden flex"
            width={200}
            height={300}
            alt="sdas"
          />
          <p className="text-neutral-400 md:w-full text-center w-[74vw] ">
            Elanlara daha sonra baxmaq üçün onları seçilmişlər siyahısına əlavə
            edin
          </p>
          <Link
            href="/"
            className="hidden md:flex justify-center hover:bg-[#ff822e] duration-300 w-[18vw] bg-[#ff4f08] text-white rounded-sm py-3"
          >
            Bütün elanlar
          </Link>
          {/* <Link href="/" className="bg-orange-500 text-white rounded-sm w-20">Bütün elanlar</Link> */}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 min-h-[80vh] p-5 md:p-0">
          {favoritedData.map((item) => {
            return (
              <Link
                href={item.path}
                key={item.id}
                className=" relative rounded-md flex flex-col gap-1 hover:shadow-md hover:shadow-neutral-400 duration-300"
              >
                <Image
                  src={item.img}
                  width={100}
                  height={100}
                  alt="image"
                  className="rounded-md w-full h-[30vh] md:w-[17vw] md:h-[30vh] "
                />
                {item.status ? (
                  <p className="absolute bg-blue-500 rounded-lg text-[16px] px-3 py-1 bottom-[34vw] md:bottom-[7.5vw] left-2 text-white z-5">
                    {item.status}
                  </p>
                ) : null}

                <IoMdHeart
                  onClick={(e) => handleRemove(e, item)}
                  className="absolute text-red-500 top-4 right-4 text-3xl"
                />

                <div className="p-2">
                  <p className="font-semibold text-xl">{item.price} AZN</p>
                  <p>{item.text}</p>
                  <p className="text-neutral-400">
                    {item.adress}, {item.date}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
      {/* MOBILE */}
      {/* <div className="flex flex-col h-full justify-center items-center">
          <Image src={"/favorite-empty.webp"} width={200} height={300} alt="sdas" />
          <p className="text-neutral-400 ">Elanlara daha sonra baxmaq üçün onları seçilmişlərə əlavə edin</p>
        </div> */}
    </section>
  );
}

export default Favorite;
