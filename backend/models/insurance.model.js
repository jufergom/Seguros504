const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const insuranceSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    description: { type: String, required: true },
    points: { type: Number, required: true },
    primaryMed: { type: Boolean, require: true },
    refund: { type: Boolean, require: true },
    urgency: { type: Boolean, require: true },
    specialty: { type: Boolean, require: true },
    diagnostics: { type: Boolean, require: true }
  },
  { timestamps: true }
);

const Insurance = mongoose.model('Insurance', insuranceSchema);

module.exports = Insurance;
