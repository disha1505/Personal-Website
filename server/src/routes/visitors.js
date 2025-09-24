const router = require('express').Router();
const { trackVisitor, getStats, getVisitorDetails } = require('../controllers/visitorController');

router.post('/track', trackVisitor);
router.get('/stats', getStats);
router.get('/details', getVisitorDetails);

module.exports = router;


