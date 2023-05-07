import {Contacts, Navbar} from './Index'

import {useState} from 'react'
const Main = () => {
  const [loading, setLoading] = useState(false)
  const [getcontacts, setContacts] = useState([])
  return (
    <div className="w-full min-h-screen bg-orange-200">
      <Navbar />
      <Contacts contacts={getcontacts} loading={loading} />
    </div>
  )
}

export default Main
