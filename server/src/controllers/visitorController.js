const crypto = require('crypto');
const Visitor = require('../models/Visitor');

function createUniqueKey(ip, userAgent) {
  return crypto.createHash('sha256').update(`${ip}|${userAgent}`).digest('hex');
}

async function trackVisitor(req, res) {
  try {
    const ip = req.requestIp || '';
    const userAgent = req.headers['user-agent'] || '';
    const path = req.query.path || req.path;
    const uniqueKey = createUniqueKey(ip, userAgent);

    await Visitor.create({ ip, userAgent, path, uniqueKey });

    const uniqueVisitors = await Visitor.distinct('uniqueKey').countDocuments();
    res.json({ ok: true, uniqueVisitors });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'Failed to track visitor' });
  }
}

async function getStats(_req, res) {
  try {
    const totalEvents = await Visitor.countDocuments();
    const uniqueVisitors = await Visitor.distinct('uniqueKey').countDocuments();
    res.json({ ok: true, totalEvents, uniqueVisitors });
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Failed to fetch stats' });
  }
}

async function getVisitorDetails(req, res) {
  try {
    const { page = 1, limit = 50 } = req.query;
    const skip = (page - 1) * limit;
    
    const visitors = await Visitor.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .select('ip userAgent path createdAt uniqueKey');
    
    const total = await Visitor.countDocuments();
    
    res.json({ 
      ok: true, 
      visitors, 
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / limit)
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Failed to fetch visitor details' });
  }
}

module.exports = { trackVisitor, getStats, getVisitorDetails };


