import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Service from "../src/models/Service.js";

dotenv.config();

const seedServices = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const filePath = path.resolve("seed/services.json");
    const services = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    await Service.deleteMany({});
    await Service.insertMany(services);

    console.log("✅ Services seeded");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error seeding services", err);
    process.exit(1);
  }
};

seedServices();
