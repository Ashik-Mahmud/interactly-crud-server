const contactControllers = require("../controllers/contact.controller");

const router = require("express").Router();

router
  .post("/createContact", contactControllers.createContact)
  .get("/getContacts", contactControllers.getContacts)
  .get("/getContact/:id", contactControllers.getContact)
  .put("/updateContact/:id", contactControllers.updateContact)
  .delete("/deleteContact/:id", contactControllers.deleteContact);

module.exports = router;
