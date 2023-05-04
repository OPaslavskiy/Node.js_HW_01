const contacts = require("./contacts");

console.log("__dirname", __dirname);

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

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({
//   action: "add",
//   name: "Inokentii Best",
//   email: "logika123@selo.com",
//   phone: "123-123-123",
// });
invokeAction({ action: "remove", id: "C9sjBfCo4UJCWjzBnOtxl" });
