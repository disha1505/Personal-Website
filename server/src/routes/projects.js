const router = require('express').Router();
const { listProjects, getFeatured, upsertProjects } = require('../controllers/projectController');

router.get('/', listProjects);
router.get('/featured', getFeatured);
router.post('/upsert', upsertProjects);

module.exports = router;


