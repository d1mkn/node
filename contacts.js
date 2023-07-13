import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db", "contacts.json");
const updateContacts = (contacts) => fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

export const listContacts = async () => {
  const data = await fs.readFile(contactsPath);

  const parseData = JSON.parse(data);
  const contactsTable = console.table(parseData);
  return contactsTable;
};

export const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contactById = contacts.find((contact) => contact.id === contactId);

  return contactById || null;
};

export const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);

  if (index === -1) {
    return null;
  }

  const [removedContact] = contacts.splice(index, 1);
  await updateContacts(contacts);
  return removedContact;
};

export const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
