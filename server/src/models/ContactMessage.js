const { Schema, model } = require('mongoose');

const ContactMessageSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    ip: String,
    userAgent: String,
  },
  { timestamps: true }
);

module.exports = model('ContactMessage', ContactMessageSchema);


