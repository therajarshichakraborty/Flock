import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  PORT: Number(process.env.PORT),
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URI: String(process.env.MONGO_URI),
  CLERK_PUBLISHABLE_KEY: String(process.env.CLERK_PUBLISHABLE_KEY),
  CLERK_SECRET_KEY: String(process.env.CLERK_SECRET_KEY),
  CLOUDINARY_CLOUD_NAME: String(process.env.CLOUDINARY_CLOUD_NAME),
  CLOUDINARY_API_KEY: String(process.env.CLOUDINARY_API_KEY),
  CLOUDINARY_API_SECRET: String(process.env.CLOUDINARY_API_SECRET),
  ARCJET_KEY: String(process.env.ARCJET_KEY),
};

Object.entries(ENV).forEach(([key, value]) => {
  if (value === undefined || value === null) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});
