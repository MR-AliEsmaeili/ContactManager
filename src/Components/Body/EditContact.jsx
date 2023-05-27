import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import img from "../../Assets/man-taking-note.png";
import { Spinner } from "../Index";
import {
  getContact,
  getAllGroups,
  EditContact,
} from "../../Service/ContactService";
const EditContactComp = ({ setForceRender, forceRender }) => {
  const { ContactId } = useParams();
  const navigate = useNavigate();
  const [state, setstate] = useState({
    loading: false,
    getcontact: {
      FullName: "",
      Photo: "",
      Mobile: "",
      Email: "",
      Group: "",
    },
    groups: [],
  });

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setstate({ ...state, loading: true });
        const { data: contactdata } = await getContact(parseInt(ContactId));

        const { data: groupdata } = await getAllGroups();
        setstate({
          ...state,
          loading: false,
          getcontact: contactdata,
          groups: groupdata,
        });
      } catch (error) {
        console.log(error.message);
        setstate({ ...state, loading: false });
      }
    };
    fetchdata();
  }, []);

  const { loading, getcontact, groups } = state;
  const setContactInfo = (e) => {
    setstate({
      ...state,
      getcontact: {
        ...state.getcontact,
        [e.target.name]: e.target.value,
      },
    });
  };

  const createContactForm = async (e) => {
    e.preventDefault();
    try {
      setstate({ ...state, loading: true });
      const { data } = await EditContact(state.getcontact, ContactId);

      setstate({ ...state, loading: false });
      if (data) {
        navigate("/Contacts");
        setForceRender(!forceRender);
      }
    } catch (error) {
      console.log(error);
      setstate({ ...state, loading: false });
    }
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container">
            <div className="flex justify-center items-center pb-2 border-teal-500 border-b-2   ">
              <h2 className="text-2xl mt-2 text-teal-400 max-sm:text-lg">
                ویرایش مخاطب
              </h2>
            </div>
            <div className="container">
              <div className="flex justify-center ">
                <div className="mt-10 mx-10  ">
                  <form onSubmit={createContactForm}>
                    <input
                      className="block p-2 mt-1 rounded-md w-64"
                      type="text"
                      name="FullName"
                      value={getcontact.FullName}
                      onChange={setContactInfo}
                      placeholder="نام و نام خانوادگی"
                      required={true}
                    />
                    <input
                      className="block p-2 mt-1 rounded-md w-64"
                      type="text"
                      name="Photo"
                      value={getcontact.Photo}
                      onChange={setContactInfo}
                      placeholder="آدرس تصویر"
                      required={true}
                    />
                    <input
                      className="block p-2 mt-1 rounded-md w-64"
                      type="text"
                      name="Mobile"
                      value={getcontact.Mobile}
                      onChange={setContactInfo}
                      placeholder="شماره تلفن"
                      required={true}
                    />
                    <input
                      className="block p-2 mt-1 rounded-md w-64"
                      type="text"
                      name="Email"
                      value={getcontact.Email}
                      onChange={setContactInfo}
                      placeholder="آدرس ایمیل"
                      required={true}
                    />
                    <select
                      className="block py-2 mt-1 rounded-md w-64"
                      name="Group"
                      onChange={setContactInfo}
                      value={getcontact.Group}
                      required={true}
                    >
                      <option>انتخاب گروه</option>
                      {groups.map((g) => (
                        <option key={g.id} value={g.id} className="w-60">
                          {g.name}
                        </option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      className="p-2 m-2 bg-teal-300 rounded-lg hover:bg-teal-500 duration-500"
                    >
                      تایید
                    </button>
                    <Link
                      to="/Contacts"
                      className="p-2 m-2 bg-red-400 rounded-lg hover:bg-red-500 duration-500"
                    >
                      انصراف
                    </Link>
                  </form>
                </div>
                <div className="w-400 max-sm:hidden mr-28 mt-10">
                  <img src={img} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EditContactComp;
