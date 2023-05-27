import { IoIosEye, IoIosTrash, IoMdCreate } from "react-icons/io";
import { Link } from "react-router-dom";

const Contact = ({ contact, confirmDelete }) => {
  return (
    <div className="p-1 ">
      <div className="flex  rounded-lg h-full bg-gray-600 border-2 border-indigo-500 p-2  max-sm:flex-col">
        <div className="flex items-center justify-center max-sm:mb-3">
          <div className="h-24 w-24 inline-flex items-center justify-center  flex-shrink-0">
            <img
              src={contact.Photo}
              alt={contact.fullname}
              className="  hover:rounded-se-2xl duration-300"
            />
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap w-fit  mr-3 rounded-2xl">
          <ul className=" max-sm:w-fit max-sm:text-sm  ">
            <li className="bg-orange-100 p-2  text-center shadow-sm text-sm border-b-2 border-gray-400 flex flex-wrap">
              <h1 className="pl-2 font-bold">نام و نام خانوادگی :</h1>

              <p className="">{contact.FullName}</p>
            </li>
            <li className="bg-orange-100 p-2  text-center shadow-sm text-sm border-b-2 border-gray-400 flex flex-wrap">
              <h1 className="pl-2 font-bold">شماره تماس :</h1>
              <p>{contact.Mobile}</p>
            </li>
            <li className="bg-orange-100 p-2  text-center shadow-sm text-sm flex flex-wrap ">
              <h1 className="pl-2 font-bold"> آدرس ایمیل : </h1>
              <p>{contact.Email}</p>
            </li>
          </ul>
        </div>
        <div className=" flex items-center justify-center m-3 sm:flex-col gap-y-2 gap-x-2">
          <Link
            to={`/Contacts/${contact.id}`}
            className="block hover:shadow-gray-50 max-sm:mx-2 max-sm:inline shadow-sm bg-indigo-400 rounded-lg text-white p-2 hover:rounded-2xl duration-500"
          >
            <IoIosEye />
          </Link>
          <Link
            to={`/Contacts/Edit/${contact.id}`}
            className="block hover:shadow-gray-50 max-sm:mx-2 max-sm:inline shadow-sm bg-yellow-400 rounded-lg text-white p-2 hover:rounded-2xl duration-500"
          >
            <IoMdCreate />
          </Link>
          <button
            onClick={confirmDelete}
            className="block hover:shadow-gray-50 max-sm:mx-2 max-sm:inline shadow-sm bg-red-500 rounded-lg text-white p-2 hover:rounded-2xl duration-500"
          >
            <IoIosTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
