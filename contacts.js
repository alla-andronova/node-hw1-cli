const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, './db/contacts.json');

async function listContacts() {
  const contacts = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(contacts);
}
async function getContactById(id) {
  const contacts = await listContacts();
  return contacts.find(contact => contact.id === id);
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    name,
    email,
    phone,
    id: Math.floor(Math.random() * 2000),
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return await contacts;
}

async function removeContact(id) {
  const contacts = await listContacts();

  const newContacts = contacts.filter(contact => contact.id !== id);
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  return await listContacts();
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
