import { IoIosEye, IoIosTrash, IoMdCreate } from "react-icons/io"

const Contact = () => {
  return (
    <div
      className="m-5 p-3 max-w-xl flex  max-sm:flex-col items-center bg-white border border-gray-200
     rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex-auto ">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4128/4128349.png"
          alt=""
          className="max-sm:h-32 max-sm:px-6 hover:rounded-se-2xl duration-300"
        />
      </div>

      <div className="p-4 flex-1  ">
        {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p> */}
        <ul className="space-y-2 ">
          <li className="bg-orange-100 p-3 rounded-2xl text-center shadow-sm">
            نام و نام خانوادگی :<p className="">علی اسماعیلی</p>
          </li>
          <li className="bg-gray-200 p-3 rounded-2xl text-center shadow-sm">
            شماره تماس :<p>09121234567</p>
          </li>
          <li className="bg-gray-200 p-3 rounded-2xl text-center shadow-sm">
            آدرس ایمیل : <p>ali.esmaeili.online@gmail.com</p>
          </li>
        </ul>
      </div>
      <div className="  space-y-3  ">
        <button className="block max-sm:mx-2 max-sm:inline shadow-md bg-indigo-400 rounded-lg text-white p-2 hover:rounded-2xl duration-500">
          <IoIosEye />
        </button>
        <button className="block max-sm:mx-2 max-sm:inline shadow-md bg-yellow-400 rounded-lg text-white p-2 hover:rounded-2xl duration-500">
          <IoMdCreate />
        </button>
        <button className="block max-sm:mx-2 max-sm:inline shadow-md bg-red-500 rounded-lg text-white p-2 hover:rounded-2xl duration-500">
          <IoIosTrash />
        </button>
      </div>
    </div>
  )
}

export default Contact
