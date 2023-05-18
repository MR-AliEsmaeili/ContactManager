import axios from 'axios'

const SERVER_URL = 'http://localhost:9000'

export const getAllContacts = () => {
  const url = `${SERVER_URL}/Contacts`
  return axios.get(url)
}
export const getContact = contactId => {
  const url = `${SERVER_URL}/Contacts/${contactId}`
  return axios.get(url)
}
export const getAllGroups = () => {
  const url = `${SERVER_URL}/Group`
  return axios.get(url)
}
export const getGroups = groupId => {
  const url = `${SERVER_URL}/Group/${groupId}`
  return axios.get(url)
}
export const CreateContact = contact => {
  const url = `${SERVER_URL}/Contacts`
  return axios.post(url, contact)
}
export const EditContact = (contact, contactId) => {
  const url = `${SERVER_URL}/Contacts/${contactId}`
  return axios.post(url, contact)
}
export const DeleteContact = contactId => {
  const url = `${SERVER_URL}/Contacts/${contactId}`
  return axios.get(url)
}
