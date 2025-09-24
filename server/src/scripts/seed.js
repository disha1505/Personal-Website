/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { connectToDatabase } = require('../lib/db');
const Project = require('../models/Project');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

async function run() {
  await connectToDatabase();
  const seedPath = path.resolve(__dirname, '../data/projects.seed.json');
  const raw = fs.readFileSync(seedPath, 'utf8');
  const items = JSON.parse(raw);
  for (const p of items) {
    await Project.findOneAndUpdate({ slug: p.slug }, p, { upsert: true, new: true });
  }
  console.log(`Seeded ${items.length} projects.`);
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});


