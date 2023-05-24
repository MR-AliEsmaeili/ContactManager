import { Link, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { Spinner } from "../Index";
import { getContact, getGroups } from "../../Service/ContactService.js";
const ViewContact = (contacts) => {
  const { ContactId } = useParams();
  const [state, setstate] = useState({
    loading: false,
    contact: {},
    group: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setstate({
          ...state,
          loading: true,
        });
        const { data: contactdata } = await getContact(ContactId);
        const { data: groupdata } = await getGroups(contactdata.Group);
        setstate({
          ...state,
          loading: false,
          contact: contactdata,
          group: groupdata,
        });
      } catch (error) {
        console.log(error.message);
        setstate({
          ...state,
          loading: false,
        });
      }
    };
    fetchData();
  }, []);

  const { loading, contact, group } = state;
  return (
    <>
      <div className="container my-3">
        <p className="text-xl text-indigo-500 border-b-2 border-indigo-400 text-center py-3 mx-5">
          اطلاعات مخاطب
        </p>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        Object.keys(contact).length > 0 && (
          <div className="container">
            <div className="p-4 ">
              <div className="flex rounded-lg h-full bg-gray-500 p-8 shadow-xl  max-sm:flex-col">
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
                  <ul className="space-y-2  max-sm:text-sm ">
                    <li className="bg-orange-100 p-1 rounded-md text-center shadow-sm">
                      نام و نام خانوادگی :<hr />
                      <p className="">{contact.FullName}</p>
                    </li>
                    <li className="bg-orange-100 p-1 rounded-md text-center shadow-sm">
                      شماره تماس :<hr className="text-gray-900" />
                      <p>{contact.Mobile}</p>
                    </li>
                    <li className="bg-orange-100 p-1 rounded-md text-center shadow-sm">
                      آدرس ایمیل :<hr className="text-gray-900" />{" "}
                      <p>{contact.Email}</p>
                    </li>
                    <li className="bg-orange-100 p-1 rounded-md text-center shadow-sm">
                      گروه :<hr className="text-gray-900" /> <p>{group.name}</p>
                    </li>
                  </ul>
                  <Link
                    to="/Contacts"
                    className="p-1 mt-2 text-center bg-indigo-400 duration-150  shadow-xl rounded-md hover:bg-indigo-500"
                  >
                    بازگشت به صفحه مخاطبین
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ViewContact;
