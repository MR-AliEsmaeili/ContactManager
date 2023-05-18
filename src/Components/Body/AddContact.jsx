import {Link} from 'react-router-dom'
import img from '../../Assets/man-taking-note.png'
import Spinner from '../Spinner'
const AddContact = ({
  createContactForm,
  loading,
  groups,
  setContactInfo,
  getcontact
}) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex justify-center items-center pb-2 border-fuchsia-800 border-b-2   ">
            <h2 className="text-2xl mt-2 text-fuchsia-800 max-sm:text-lg">
              ساخت مخاطب جدید
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
                    {groups.map(g => (
                      <option key={g.id} value={g.id} className="w-60">
                        {g.name}
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="p-2 m-2 bg-green-400 rounded-lg hover:bg-green-500 duration-500"
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
        </>
      )}
    </>
  )
}

export default AddContact
