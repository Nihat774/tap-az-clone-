"use client";
import { elanlar } from "@/constants/announcement";
import Link from "next/link";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  const [inputText, setInputText] = useState("");
  const [foundedData, setFoundedData] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  function handleSearch(value) {
    setInputText(value);

    if (value.trim().length !== 0) {
      const results = elanlar.filter((e) =>
        e.text.toLowerCase().startsWith(value.toLowerCase())
      );
      setFoundedData(results);
      setShowOverlay(results.length > 0);
    } else {
      setFoundedData([]);
      setShowOverlay(false);
    }
  }

  return (
    <>
      <form className="flex items-center relative z-10">
        <IoSearchOutline className="absolute left-[13px] top-[16px] text-xl text-neutral-400" />
        <input
          type="text"
          value={inputText}
          onChange={(e) => handleSearch(e.target.value)}
          className="py-3 pl-9 outline-0 focus:border-orange-500 rounded-tl-[14px] rounded-bl-[14px] bg-white w-[35vw] border border-neutral-300"
          placeholder="Əşya və ya xidmət axtarışı"
        />
        <select className="relative outline-0 border border-neutral-300 bg-white p-3 w-[10vw]">
          <option value="">Baki</option>
          <option value="">Xizi</option>
        </select>
        <button
          type="submit"
          className="bg-orange-500 text-white p-3 rounded-tr-[14px] rounded-br-[14px] hover:bg-orange-600 cursor-pointer"
        >
          Tap
        </button>

        {foundedData.length > 0 && inputText.length > 0 && (
          <div className="absolute top-16 left-0 w-full rounded-xl bg-white shadow-lg">
            {foundedData.map((item) => (
              <Link
                key={item.id}
                href={`/elanlar/${item.id}`}
                className="block p-4 hover:bg-orange-50 rounded-xl"
                onClick={()=>{
                  setShowOverlay(false);
                  setFoundedData("");
                  setInputText(item.text.toLowerCase())
                }}
              >
                {item.text}
              </Link>
            ))}
          </div>
        )}
      </form>

      {showOverlay && (
        <div
          className="inset-0 opacity-40 h-[100vh] bg-black absolute"
          onClick={() => setShowOverlay(false)}
        ></div>
      )}
    </>
  );
}

export default Search;
