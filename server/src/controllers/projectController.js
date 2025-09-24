const Project = require('../models/Project');

async function listProjects(req, res) {
  const category = req.query.category;
  const q = category ? { category } : {};
  const rows = await Project.find(q).sort({ featured: -1, order: 1, createdAt: -1 });
  res.json({ ok: true, rows });
}

async function getFeatured(_req, res) {
  const doc = await Project.findOne({ featured: true }).sort({ order: 1, createdAt: -1 });
  res.json({ ok: true, project: doc });
}

async function upsertProjects(req, res) {
  const { projects } = req.body;
  if (!Array.isArray(projects)) return res.status(400).json({ ok: false, error: 'projects[] required' });
  const results = [];
  for (const p of projects) {
    const doc = await Project.findOneAndUpdate({ slug: p.slug }, p, { upsert: true, new: true });
    results.push(doc);
  }
  res.json({ ok: true, results });
}

module.exports = { listProjects, getFeatured, upsertProjects };


