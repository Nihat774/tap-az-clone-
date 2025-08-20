"use client";
import useStore from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { GoHeartFill } from "react-icons/go";

function Cart() {
  const elanlar = [
    { id: 1, path: "#", img: "/elanlar-images/velo.jpg", price: 100, text: "Velosiped", date: "bu gün 15:00", adress: "Bakı", status: "mağaza" },
    { id: 2, path: "#", img: "/elanlar-images/car.jpg", price: 14000, text: "Maşın", date: "bu gün 11:00", adress: "Mingəçevir", status: "" },
    { id: 3, path: "#", img: "/elanlar-images/motorskilet.jpg", price: 250, text: "Motorsiklet", date: "dünən 16:00", adress: "Sumqayit", status: "mağaza" },
    { id: 4, path: "#", img: "/elanlar-images/generator.jpg", price: 200, text: "Dizel generator", date: "bu gün 13:00", adress: "Bakı", status: "" },
    { id: 5, path: "#", img: "/elanlar-images/kondisoner.jpg", price: 4500, text: "Kondisioner", date: "bu gün 14:00", adress: "Gəncə", status: "mağaza" },
    { id: 6, path: "#", img: "/elanlar-images/old-phone.jpg", price: 1200, text: "Qədim telefon", date: "dünən 09:00", adress: "Bakı", status: "" },
    { id: 7, path: "#", img: "/elanlar-images/computer.jpg", price: 3200, text: "Kompüter", date: "bu gün 10:00", adress: "Mingəçevir", status: "mağaza" },
    { id: 8, path: "#", img: "/elanlar-images/masaj-stolu.jpg", price: 7500, text: "Lüks masaj stolu", date: "dünən 17:00", adress: "Bakı", status: "" },
    { id: 9, path: "#", img: "/elanlar-images/yazi-stolu.jpg", price: 300, text: "Yazı masası", date: "bu gün 12:00", adress: "Bakı", status: "mağaza" },
    { id: 10, path: "#", img: "/elanlar-images/laptop.jpg", price: 500, text: "Laptop", date: "bu gün 18:00", adress: "Sumqayit", status: "" },
  ];

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
            href={`/${item.id}`}
            className=" relative rounded-md flex flex-col hover:shadow-md hover:shadow-neutral-400 duration-300 bg-white"
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
              <p className="font-semibold text-sm md:text-lg">{item.price} AZN</p>
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
