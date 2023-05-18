import {AddContact, Contacts, EditContact, Navbar, ViewContact} from './Index'
import {Navigate, Route, Routes} from 'react-router-dom'

import {useState, useEffect} from 'react'

import {getAllContacts, getAllGroups} from '../Service/ContactService'
const Main = () => {
  const [loading, setLoading] = useState(false)
  const [getcontacts, setContacts] = useState([])
  const [getGroups, setGroups] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const {data: contactsData} = await getAllContacts()
      const {data: groupData} = await getAllGroups()
      setContacts(contactsData)
      setGroups(groupData)
      setLoading(false)
    }
    fetchData()
  }, [])
  return (
    <div className="w-full min-h-screen bg-orange-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Contacts" />} />
        <Route
          path="/Contacts"
          element={
            <Contacts
              groups={getGroups}
              contacts={getcontacts}
              loading={loading}
            />
          }
        />
        <Route path="/Contacts/Add" element={<AddContact />} />
        <Route path="/Contacts/:ContactId" element={<ViewContact />} />
        <Route path="/Contacts/Edit/:ContactId" element={<EditContact />} />
      </Routes>
    </div>
  )
}

export default Main
