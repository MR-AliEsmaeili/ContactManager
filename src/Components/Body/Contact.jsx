import { IoIosEye, IoIosTrash, IoMdCreate } from "react-icons/io";
import { Link } from "react-router-dom";

const Contact = ({ contact }) => {
  return (
    <div className="p-4 ">
      <div className="flex rounded-lg h-full bg-gray-600 border-2 border-indigo-500 p-8  max-sm:flex-col">
        <div className="flex items-center justify-center mb-3">
          <div className="w-48 h-48  inline-flex items-center justify-center rounded-full bg-indigo-300 text-white flex-shrink-0">
            <img
              src={contact.Photo}
              alt={contact.fullname}
              className="max-sm:h-32 max-sm:px-6 hover:rounded-se-2xl duration-300"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between flex-grow mr-3">
          <ul className="space-y-2 max-sm:w-fit max-sm:text-sm ">
            <li className="bg-orange-100 p-1 rounded-2xl text-center shadow-sm">
              نام و نام خانوادگی :<hr />
              <p className="">{contact.FullName}</p>
            </li>
            <li className="bg-orange-100 p-1 rounded-2xl text-center shadow-sm">
              شماره تماس :<hr className="text-gray-900" />
              <p>{contact.Mobile}</p>
            </li>
            <li className="bg-orange-100 p-1 rounded-2xl text-center shadow-sm">
              آدرس ایمیل :<hr className="text-gray-900" />{" "}
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
          <button className="block hover:shadow-gray-50 max-sm:mx-2 max-sm:inline shadow-sm bg-red-500 rounded-lg text-white p-2 hover:rounded-2xl duration-500">
            <IoIosTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
