const ProjectClick = require('../models/ProjectClick');

async function registerClick(req, res) {
  try {
    const { projectSlug } = req.body;
    if (!projectSlug) return res.status(400).json({ ok: false, error: 'projectSlug is required' });
    const doc = await ProjectClick.findOneAndUpdate(
      { projectSlug },
      { $inc: { count: 1 }, lastClickedAt: new Date() },
      { upsert: true, new: true }
    );
    res.json({ ok: true, projectSlug: doc.projectSlug, count: doc.count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'Failed to register click' });
  }
}

async function getClickCounts(_req, res) {
  try {
    const rows = await ProjectClick.find({}).sort({ count: -1 });
    res.json({ ok: true, rows });
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Failed to fetch click counts' });
  }
}

module.exports = { registerClick, getClickCounts };


