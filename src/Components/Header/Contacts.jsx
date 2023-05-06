import {IoIosAddCircle} from 'react-icons/io'
import Contact from '../Body/Contact'
import NotFound from '../../Assets/no-found.gif'
import Spinner from '../Spinner'

const Contacts = ({contacts, loading}) => {
  return (
    <>
      <div className="contaner">
        <div className="flex justify-center">
          <button className="bg-indigo-400 shadow-md text-white  p-2 mt-2 rounded-md hover:rounded-lg hover:bg-indigo-500 duration-300 flex items-center">
            <IoIosAddCircle className="text-3xl pl-2" />
            ساخت مخاطب جدید
          </button>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          {contacts.length > 0 ? (
            contacts.map(c => <Contact key={c.id} contact={c} />)
          ) : (
            <div className="text-center  items-center justify-center pt-10">
              <p>مخاطب یافت نشد</p>
              <img className="h-52 max-sm:h-32  m-auto" src={NotFound} alt="" />
            </div>
          )}

          {/* <Contact /> */}
        </div>
      )}
    </>
  )
}

export default Contacts
