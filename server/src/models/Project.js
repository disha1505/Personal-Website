const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    description: { type: String },
    tech: [{ type: String }],
    repoUrl: String,
    liveUrl: String,
    videoUrl: String,
    bannerImage: String,
    thumbnail: String,
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    date: String,
  },
  { timestamps: true }
);

module.exports = model('Project', ProjectSchema);


