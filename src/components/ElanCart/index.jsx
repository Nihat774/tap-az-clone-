"use client";
import { elanlar } from "@/constants/announcement";
import useStore from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { GoHeartFill } from "react-icons/go";

function Cart() {
  const Add = useStore((state) => state.AddFavorite);
  const Remove = useStore((state) => state.Remove);
  const favoritedData = useStore((state) => state.store);

  const handleLiked = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    Add(item);
  };

  const handleRemove = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    Remove(item);
  };

  return (
    <>
      {elanlar.map((item) => {
        const favorited = favoritedData.find((data) => data.id == item.id);

        return (
          <Link
            key={item.id}
            target="_blank"
            href={`elanlar/${item.id}`}
            className="relative rounded-md flex flex-col hover:shadow-md hover:shadow-neutral-400 duration-300 bg-white"
          >
            <div className="relative w-full h-40 md:h-56 lg:h-64">
              <Image
                src={item.img}
                alt={item.text}
                fill
                className="rounded-md object-cover"
              />
            </div>

            {item.status && (
              <p className="absolute h-fit bottom-20 md:bottom-24  left-2 bg-blue-600 rounded-md text-[10px] md:text-[12px] px-2 py-1 text-white">
                {item.status}
              </p>
            )}

            {favorited ? (
              <GoHeartFill
                onClick={(e) => handleRemove(e, item)}
                className="text-red-500 absolute top-2 right-2 text-lg md:text-2xl cursor-pointer"
              />
            ) : (
              <GoHeartFill
                onClick={(e) => handleLiked(e, item)}
                className="text-neutral-400 absolute top-2 right-2 text-lg md:text-2xl cursor-pointer"
              />
            )}

            <div className="p-2">
              <p className="font-semibold text-sm md:text-lg">
                {item.price} AZN
              </p>
              <p className="md:text-base text-sm">{item.text}</p>
              <p className="text-neutral-400 md:text-sm text-[10px]">
                {item.adress}, {item.date}
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default Cart;
