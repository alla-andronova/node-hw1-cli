const argv = require('yargs').argv;
const contactsOperations = require('./contacts');

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      contactsOperations.listContacts().then(console.table);

      break;

    case 'get':
      contactsOperations.getContactById(id).then(console.table);
      break;
    case 'add':
      contactsOperations.addContact(name, email, phone).then(console.table);

      break;
    case 'remove':
      contactsOperations.removeContact(id).then(console.table);
      break;
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
