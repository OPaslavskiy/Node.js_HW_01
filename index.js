const contacts = require("./contacts");

console.log("__dirname", __dirname);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
  }
};

invokeAction({ action: "read" });
