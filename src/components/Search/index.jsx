
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
function Search() {
  return (
     <form className="flex items-center relative">
        <IoSearchOutline className="absolute left-[13px] top-[16px] text-xl text-neutral-400" />
        <input type="text" className="py-3 pl-9 outline-0 focus:border-orange-500 rounded-tl-[14px] rounded-bl-[14px] bg-white w-[35vw] border border-neutral-300" placeholder="Əşya və ya xidmət axtarışı" />
        <select className="relative outline-0 border border-neutral-300 bg-white p-3 w-[10vw]">
            {/* <FaMapMarkerAlt className="absolute left-3" /> */}
            <option value="">Baki</option>
            <option value="">Xizi</option>
        </select>
            <button className="bg-orange-500 text-white p-3 rounded-tr-[14px] rounded-br-[14px] hover:bg-orange-600 cursor-pointer">Tap</button>
       </form>
  )
}

export default Search
