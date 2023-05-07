import Navbar from "./Header/Navbar";
import Contacts from "./Header/Contacts";
import { useState } from "react";
const Main = () => {
  const [loading, setLoading] = useState(true);
  const [getcontacts, setContacts] = useState([]);
  return (
    <div className="w-full h-full bg-orange-200">
      <Navbar />
      <Contacts contacts={getcontacts} loading={loading} />
    </div>
  );
};

export default Main;
