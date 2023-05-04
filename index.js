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
  }
};

// invokeAction({ action: "read" });
invokeAction({ action: "getById", id: "qdggE76Jtbfd9eWJHrssH" });
