const contactControllers = require('../controllers/contact.controller');

const router = require('express').Router();

router.post("/createContact", contactControllers.createContact)



module.exports = router;