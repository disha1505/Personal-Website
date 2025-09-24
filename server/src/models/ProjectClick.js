const { Schema, model } = require('mongoose');

const ProjectClickSchema = new Schema(
  {
    projectSlug: { type: String, required: true, index: true },
    count: { type: Number, default: 0 },
    lastClickedAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = model('ProjectClick', ProjectClickSchema);


