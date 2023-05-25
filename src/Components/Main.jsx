import {useState, useEffect} from 'react'
import {confirmAlert} from 'react-confirm-alert'
import {AddContact, Contacts, EditContact, Navbar, ViewContact} from './Index'
import {useNavigate, Route, Routes, Navigate} from 'react-router-dom'

import {
  getAllContacts,
  getAllGroups,
  CreateContact,
  DeleteContact
} from '../Service/ContactService'
const Main = () => {
  const Navigates = useNavigate()
  const [forceRender, setForceRender] = useState(false)
  const [loading, setLoading] = useState(true)
  const [getcontacts, setContacts] = useState([])
  const [getGroups, setGroups] = useState([])
  const [getContact, setContact] = useState({
    FullName: '',
    Photo: '',
    Mobile: '',
    Email: '',
    Group: ''
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const {data: contactsData} = await getAllContacts()
        const {data: groupData} = await getAllGroups()
        setContacts(contactsData)
        setGroups(groupData)
        setLoading(false)
      } catch (error) {
        console.log(error.massage)
      }
    }
    fetchData()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const {data: contactsData} = await getAllContacts()
        setContacts(contactsData)
        setLoading(false)
      } catch (error) {
        console.log(error.massage)
      }
    }
    fetchData()
  }, [forceRender])
  const setContactInfo = event => {
    setContact({
      ...getContact,
      [event.target.name]: event.target.value
    })
  }
  const createContactForm = async event => {
    event.preventDefault()
    try {
      const {status} = await CreateContact(getContact)
      if (status === 201) {
        setContact({})
        setForceRender(!forceRender)
        Navigates('/Contacts')
      }
    } catch (err) {
      console.log(err.massage)
    }
  }

  const removeContact = async contactId => {
    try {
      setLoading(true)
      const response = await DeleteContact(contactId)
      if (response) {
        const {data: contactsData} = await getAllContacts()
        setContacts(contactsData)

        setLoading(false)
      }
    } catch (error) {
      console.log(error.message)
      setLoading(false)
    }
  }

  const confirm = (contactId, contactfullname) => {
    confirmAlert({
      customUI: ({onClose}) => {
        return (
          <div className="p-4 border-2 border-teal-500 bg-gray-400 rounded-lg">
            <h1 className="text-2xl ">پاک کردن مخاطب</h1>
            <h4 className="text-lg ">
              مطمئن هستی که مخاطب{' '}
              <h3 className="text-xl text-red-500 inline">{contactfullname}</h3>{' '}
              پاک بشه ؟
            </h4>
            <div className="mt-3">
              <button
                className="p-2 m-2 bg-teal-400 hover:bg-teal-600 duration-500 rounded-lg"
                onClick={() => {
                  removeContact(contactId)
                  onClose()
                }}
              >
                مطمئن هستم
              </button>
              <button
                className="p-2 m-2 bg-red-400 hover:bg-red-600 duration-500 rounded-lg"
                onClick={onClose}
              >
                انصراف
              </button>
            </div>
          </div>
        )
      }
    })
  }

  return (
    <div className="w-full min-h-screen" style={{backgroundColor: '#aaaaaaaa'}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Contacts" />} />
        <Route
          path="/Contacts"
          element={
            <Contacts
              contacts={getcontacts}
              loading={loading}
              confirmDelete={confirm}
            />
          }
        />
        <Route
          path="/Contacts/Add"
          element={
            <AddContact
              loading={loading}
              groups={getGroups}
              setContactInfo={setContactInfo}
              getcontact={getContact}
              createContactForm={createContactForm}
            />
          }
        />
        <Route
          path="/Contacts/:ContactId"
          element={<ViewContact loading={loading} contacts={getcontacts} />}
        />
        <Route path="/Contacts/Edit/:ContactId" element={<EditContact />} />
      </Routes>
    </div>
  )
}

export default Main
