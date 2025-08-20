import Image from "next/image";
import Link from "next/link";
import React from "react";

function Category() {
  const categories = [
    { id: 1, image: "/Category-images/neqliyyat.png", text: "Nəqliyyat", path: "" },
    { id: 2, image: "/Category-images/ev-bag.png", text: "Ev və bağ üçün", path: "" },
    { id: 3, image: "/Category-images/elektronika.png", text: "Elektronika", path: "" },
    { id: 4, image: "/Category-images/usaqlar.png", text: "Uşaqlar aləmi", path: "" },
    { id: 5, image: "/Category-images/dasinmaz-emlak.png", text: "Daşınmaz əmlak", path: "" },
    { id: 6, image: "/Category-images/xidmetler-biznes.png", text: "Xidmətlər və biznes", path: "" },
    { id: 7, image: "/Category-images/wexsi-esyalar.png", text: "Şəxsi əşyalar", path: "" },
    { id: 8, image: "/Category-images/hobbi-asude.png", text: "Hobbi və asudə", path: "" },
    { id: 9, image: "/Category-images/heyvanlar.png", text: "Heyvanlar", path: "" },
    { id: 10, image: "/Category-images/is.png", text: "İş elanları", path: "" },
  ];

  return (
    <section
      className="
        p-2 w-full bg-white md:bg-neutral-100
        flex md:grid md:grid-cols-8 gap-2 md:gap-5
        overflow-x-scroll md:overflow-hidden no-scrollbar
      "
    >
      {categories.map((item) => (
        <Link
          href={item.path}
          key={item.id}
          className="flex flex-col gap-1 items-center group min-w-[80px]"
        >
          <img
            src={item.image}
            alt={item.text}
            className="
              h-[60px] w-[80px] md:w-[90px] md:h-[90px]
              border duration-300 group-hover:border-orange-500
              bg-neutral-100 md:bg-white border-neutral-200
              p-1 md:p-3 rounded-[21%]
            "
          />
          <p className="group-hover:text-orange-500 duration-300 text-center lg:text-lg text-[10px]">
            {item.text}
          </p>
        </Link>
      ))}
    </section>
  );
}

export default Category;
