const mongoose = require("mongoose");

const vinSchema = new mongoose.Schema({
  vinNumber: {
    type: String,
    required: true, // Make the vinNumber field required
  },
  searchNumber: String,
  serialNumber: String,
});

const Vin = mongoose.models.Vin || mongoose.model("Vin", vinSchema);

export default Vin;
