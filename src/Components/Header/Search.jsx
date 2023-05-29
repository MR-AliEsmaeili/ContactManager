import {IoIosSearch} from 'react-icons/io'
const Search = ({query, search}) => {
  return (
    <div className="md:ml-44  flex items-center">
      <input
        placeholder="جستجو ..."
        type="text"
        value={query.text}
        onChange={search}
        className="max-sm:w-32 w-72 border-2 px-2 h-8 rounded-s-md border-indigo-400 outline-none  duration-200"
      />
      <button className="bg-indigo-500  text-white px-2 h-8 rounded-e-md">
        <IoIosSearch />
      </button>
    </div>
  )
}

export default Search
