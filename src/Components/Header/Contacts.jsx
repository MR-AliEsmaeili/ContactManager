import {IoIosAddCircle} from 'react-icons/io'
import {Contact, Spinner} from '../Index'
import NotFound from '../../Assets/no-found.gif'
import {Link} from 'react-router-dom'

const Contacts = ({contacts, groups, loading}) => {
  return (
    <>
      <div className="contaner">
        <div className="flex justify-center">
          <Link
            to="/contacts/Add"
            className="max-sm:hidden bg-indigo-400 shadow-md text-white  p-2 mt-2 rounded-md hover:rounded-lg hover:bg-indigo-500 duration-300 flex items-center"
          >
            <IoIosAddCircle className="text-3xl pl-2" />
            ساخت مخاطب جدید
          </Link>
          <Link
            to="/contacts/Add"
            className="hidden max-sm:block duration-300 rounded-full bg-indigo-400 shadow-md text-white  p-2 mt-2    hover:bg-indigo-500   "
          >
            <IoIosAddCircle className="text-3xl " />
          </Link>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap justify-center mt-10">
          {contacts.length > 0 ? (
            contacts.map(c => <Contact key={c.id} contact={c} />)
          ) : (
            <div className="text-center  items-center justify-center pt-10">
              <p>مخاطب یافت نشد</p>
              <img className="h-52 max-sm:h-32  m-auto" src={NotFound} alt="" />
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Contacts
