const router = require('express').Router();
const { submitContact, listContacts } = require('../controllers/contactController');

router.post('/', submitContact);
router.get('/', listContacts);

module.exports = router;


