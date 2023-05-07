import { IoIosContact } from "react-icons/io";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className=" w-full right-0 top-0 shadow-xl">
      <div
        className="flex justify-between items-center max-md:flex-col max-md:space-y-4
                     bg-gray-500 py-2 md:px-10 px-7"
      >
        <div className="max-sm:text-xs grid-cols-6 font-bold text-xl cursor-pointer flex items-center text-gray-800  ">
          <IoIosContact className="max-sm:text-lg text-3xl text-indigo-800" />
          <div className="mr-3 text-white">وب اپلیکیشن مدیریت مخاطبین</div>
        </div>
        <Search />
      </div>
    </div>
  );
};
export default Navbar;
