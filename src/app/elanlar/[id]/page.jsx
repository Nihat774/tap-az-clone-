"use client";
import { elanlar } from "@/constants/announcement";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { FaHeart, FaPhoneAlt, FaRegHeart, FaUser } from "react-icons/fa";
import { FiFlag } from "react-icons/fi";
import { BsExclamationTriangle } from "react-icons/bs";
import useStore from "@/store/store";

function SinglePage() {
  const Add = useStore((state) => state.AddFavorite);
  const Remove = useStore((state) => state.Remove);
  const favoritedData = useStore((state) => state.store);
  const { id } = useParams();
  const [isOpenNumber, setIsOpenNumber] = useState(false);
  console.log(id);
  const clickedCart = elanlar.find((item) => item.id == id);
  console.log(clickedCart);
  const favorited = favoritedData?.find((item) => item.id == clickedCart.id);
  return (
    <section className="min-h-[80vh]">
      <div className="flex justify-end md:justify-between py-5 px-5">
        <h2 className="text-xl font-semibold md:block hidden">
          {clickedCart.text}
        </h2>
        <div className="flex gap-4">
          {favorited ? (
            <div
              className="flex items-center gap-2 group  cursor-pointer"
              onClick={() => Remove(clickedCart)}
            >
              <FaHeart className=" text-xl text-orange-500" />
              <p className="group-hover:text-orange-500 md:block hidden">
                Seçilmişlərdədir
              </p>
            </div>
          ) : (
            <div
              className="flex items-center gap-2 group  cursor-pointer"
              onClick={() => Add(clickedCart)}
            >
              <FaRegHeart className="group-hover:text-orange-500 text-xl" />
              <p className="group-hover:text-orange-500 md:block hidden">
                Seçilmişlərdə saxla
              </p>
            </div>
          )}
          <div className="flex items-center gap-2 group  cursor-pointer">
            <FiFlag className="group-hover:text-orange-500 text-xl" />
            <p className="group-hover:text-orange-500 md:block hidden">
              Şikayət et
            </p>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between">
        <div className="w-full md:w-[45vw] h-[60vh] md:h-[80vh]">
          <Image
            width={100}
            height={100}
            src={clickedCart.img}
            alt={clickedCart.text}
            className="w-full h-full"
          />
        </div>

        <div className="md:border h-fit border-neutral-300 rounded-xl p-2 md:p-4 md:w-[23vw] flex flex-col gap-4">
          <p className="text-4xl font-semibold">{clickedCart.price} AZN</p>
          <p className="text-2xl">{clickedCart.text}</p>
          <hr className="w-full text-neutral-300 " />
          <div className="flex justify-between w-[80%]">
            <p className="text-neutral-400">Şəhər</p>
            <p>{clickedCart.adress}</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p>Name</p>
              <p className="underline text-neutral-400">
                Istifadəçinin bütün elanları
              </p>
            </div>
            <FaUser className="border rounded-full border-neutral-300 text-neutral-300 p-2 text-5xl" />
          </div>

          {/* Number */}
          <div
            onClick={() => setIsOpenNumber(!isOpenNumber)}
            className={`${
              isOpenNumber ? "hidden" : "hidden md:flex"
            } bg-green-600 hover:bg-green-700 cursor-pointer rounded-xl text-white py-4  flex-col justify-center items-center`}
          >
            <p>Nömrəni göstər</p>
            <div className="flex items-center gap-1">
              <FaPhoneAlt />
              <p>{`(055) 774 85 **`}</p>
            </div>
          </div>
          {isOpenNumber ? (
            <div className="hidden md:flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-orange-500 text-xl" />
                <p className="text-2xl font-semibold hover:text-orange-500 cursor-pointer">{`(055) 774-85-48`}</p>
              </div>
              <div className="border rounded-[6px] bg-orange-50 py-3 px-2 border-red-500 flex items-center gap-2 justify-center ">
                <BsExclamationTriangle className="text-2xl text-red-500" />
                <div className="text-sm md:w-[16vw] ">
                  <span className="text-red-500">Diqqət! </span>
                  <span>
                    Beh göndərməmişdən öncə sövdələşmənin təhlükəsiz olduğuna
                    əmin olun!
                  </span>
                </div>
              </div>
            </div>
          ) : null}
          {/* message */}
          <div className="flex gap-2 fixed md:static bottom-20">
            <div className="md:hidden bg-green-500 w-[47vw] rounded-xl py-3 justify-center flex items-center gap-2 text-white ">
              <FaPhoneAlt className="text-xl" />
              <p>Zəng et</p>
            </div>

            <div className="flex md:w-full w-[47vw] gap-1 items-center justify-center rounded-xl bg-blue-500 text-white py-3 cursor-pointer">
              <AiFillMessage className="md:text-lg text-xl" />
              <p>Mesaj yaz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SinglePage;
