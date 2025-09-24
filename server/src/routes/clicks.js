const router = require('express').Router();
const { registerClick, getClickCounts } = require('../controllers/clickController');

router.post('/', registerClick);
router.get('/', getClickCounts);

module.exports = router;


