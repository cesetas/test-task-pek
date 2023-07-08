import connectDB from "../../database/dbConnect";
import Vin from "../../models/Vin";

connectDB();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { vinNumber, searchNumber, serialNumber } = req.body;
        const newVin = new Vin({ vinNumber, searchNumber, serialNumber });
        await newVin.save();
        res.status(201).json({ success: true, data: newVin });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "GET":
      try {
        const posts = await Vin.find({});
        res.status(200).json({ success: true, data: posts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
