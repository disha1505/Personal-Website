const { Schema, model } = require('mongoose');

const VisitorSchema = new Schema(
  {
    ip: { type: String, index: true },
    userAgent: String,
    path: String,
    country: String,
    city: String,
    uniqueKey: { type: String, index: true },
  },
  { timestamps: true }
);

module.exports = model('Visitor', VisitorSchema);


