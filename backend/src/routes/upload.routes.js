import express from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import { Readable } from "stream";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("file"), async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const bufferStream = Readable.from(req.file.buffer);

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "cff-services" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      bufferStream.pipe(stream);
    });

    res.json({ url: result.secure_url });
  } catch (err) {
    next(err);
  }
});

export default router;
