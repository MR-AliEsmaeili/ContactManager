import {
  AddContact,
  Contacts,
  EditContact,
  Navbar,
  ViewContact,
} from "./Index";
import { useNavigate, Route, Routes, Navigate } from "react-router-dom";

import { useState, useEffect } from "react";

import {
  getAllContacts,
  getAllGroups,
  CreateContact,
} from "../Service/ContactService";
const Main = () => {
  const Navigates = useNavigate();
  const [forceRender, setForceRender] = useState(false);
  const [loading, setLoading] = useState(false);
  const [getcontacts, setContacts] = useState([]);
  const [getGroups, setGroups] = useState([]);
  const [getContact, setContact] = useState({
    FullName: "",
    Photo: "",
    Mobile: "",
    Email: "",
    Group: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await getAllContacts();
        const { data: groupData } = await getAllGroups();
        setContacts(contactsData);
        setGroups(groupData);
        setLoading(false);
      } catch (error) {
        console.log(error.massage);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await getAllContacts();
        setContacts(contactsData);
        setLoading(false);
      } catch (error) {
        console.log(error.massage);
      }
    };
    fetchData();
  }, [forceRender]);
  const setContactInfo = (event) => {
    setContact({
      ...getContact,
      [event.target.name]: event.target.value,
    });
  };
  const createContactForm = async (event) => {
    event.preventDefault();
    try {
      const { status } = await CreateContact(getContact);
      if (status === 201) {
        setContact({});
        setForceRender(!forceRender);
        Navigates("/Contacts");
      }
    } catch (err) {
      console.log(err.massage);
    }
  };
  return (
    <div className="w-full min-h-screen bg-orange-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Contacts" />} />
        <Route
          path="/Contacts"
          element={<Contacts contacts={getcontacts} loading={loading} />}
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
        <Route
          path="/Contacts/Edit/:ContactId"
          element={
            <EditContact
              loading={loading}
              groups={getGroups}
              setContactInfo={setContactInfo}
              getcontact={getContact}
              createContactForm={createContactForm}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Main;
