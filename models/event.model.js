import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  community: { type: mongoose.Schema.Types.ObjectId, ref: "Community", required: true },
  organizer: { type: mongoose.Schema.Types.ObjectId, refPath: "organizerModel", required: true },
  organizerModel: { type: String, enum: ["User", "Business"], required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Event", eventSchema);


