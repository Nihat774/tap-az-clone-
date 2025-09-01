import { categories } from "@/constants/categories";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Category() {


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
