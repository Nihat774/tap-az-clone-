"use client";
import { categories } from "@/constants/categories";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaThLarge } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";


function Catalog() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredAltCategory,setHoveredAltCategory] = useState(null)
  useEffect(() => {
    console.log(hoveredCategory);
  }, [hoveredCategory || 1]);
  useEffect(()=>{
console.log(hoveredAltCategory);

  },[hoveredAltCategory || 1])
  return (
    <section>
      <Link
        onClick={() => setIsOpen(!isOpen)}
        href="#"
        className="bg-orange-600 relative hover:bg-orange-700 duration-300 rounded-[14px] flex items-center justify-center py-[15px] px-[15px] gap-2"
      >
        {isOpen ? (
          <AiOutlineClose className="text-white" />
        ) : (
          <FaThLarge className="text-white" />
        )}
        {/* <p className="text-white xl:block hidden">Kataloq</p> */}
      </Link>
      {isOpen ? (
        <nav
          onMouseLeave={() => {
            setHoveredCategory(null)
            setHoveredAltCategory(null)
          }}
          className="bg-white fixed left-0 h-[90vh] top-18 w-full py-4 px-8"
        >
          <div className=" flex flex-col overflow-y-scroll h-full w-[26%]">
            {categories.map((item) => {
              return (
                <div
                  onMouseEnter={() => setHoveredCategory(item)}
                  className="flex group relative justify-between items-center w-[22vw] p-2 hover:bg-neutral-100 rounded-2xl cursor-pointer"
                  key={item.id}
                >
                  <div className="flex items-center gap-2 group-hover:text-orange-500">
                    <Image
                      src={item.image}
                      width={40}
                      height={40}
                      alt={item.text}
                    />
                    <p className="text-[14px]">{item.text}</p>
                  </div>
                  <GoChevronRight className="group-hover:text-orange-500 text-xl text-neutral-400" />
                </div>
              );
            })}
          </div>
          <div  className={`w-[25vw] flex flex-col  h-full absolute ${hoveredCategory?"border-r border-neutral-300":""} top-5 left-88 z-20`}>
            {hoveredCategory &&
              hoveredCategory.altcategory.map((alt) => {
                return (
                  <div
                  onMouseEnter={()=>setHoveredAltCategory(alt)}
                    key={alt.id}
                    className="group flex cursor-pointer justify-between px-5 py-3 hover:bg-neutral-100 rounded-2xl"
                  >
                    <p className="group-hover:text-orange-500">{alt.name}</p>
                   {
                    alt.models?.length !=0 ?(
                       <GoChevronRight className="group-hover:text-orange-500 text-xl text-neutral-400" />
                 
                    ):null
                   } </div>
                );
              })}
          </div>
          <div className={`w-[26vw] flex flex-col  h-full absolute ${hoveredAltCategory?.models?.length !=0 ?"border-r border-neutral-300":""} top-5 right-[20vw] z-20`}>
            {
              hoveredAltCategory ? (hoveredAltCategory?.models?.map((model)=>{
                return(
                  <Link href={model.path} key={model.id}  className={`group hover:text-orange-500 flex cursor-pointer justify-between px-5 py-3 hover:bg-neutral-100 rounded-2xl`}>
                    {model.name}
                  </Link>
                )
              })):null
            }
          </div>
        </nav>
      ) : null}
    </section>
  );
}

export default Catalog;
