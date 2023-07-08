const mongoose = require("mongoose");

const vinSchema = new mongoose.Schema({
  vinNumber: {
    type: String,
    required: true, // Make the vinNumber field required
  },
  searchNumber: String,
  serialNumber: String,
  // equipmentcode: Number,
  // yearofissue: Number,
  // serialnumber: String,
  // placeofproduction: String,
  // createdAt: {
  //   type: Date,
  //   default: new Date(),
  // },
});

// module.exports = mongoose.models.Vin || mongoose.model("Vin", VinSchema);

const Vin = mongoose.models.Vin || mongoose.model("Vin", vinSchema);

export default Vin;
