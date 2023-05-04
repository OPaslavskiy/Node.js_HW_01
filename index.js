const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "getById":
      const contactById = await contacts.getContactById(id);
      return console.log(contactById);
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);
  }
};
