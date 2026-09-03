import express from "express";
import cors from "cors";
import http from "node:http";
import { Server } from "socket.io";
import { clerkMiddleware } from "@clerk/express";

import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import notificationRoutes from "./routes/notification.route.js";
import chatRoutes from "./routes/chat.route.js";
import messageRoutes from "./routes/message.route.js";

import User from "./models/user.model.js";
import Chat from "./models/chat.model.js";
import Message from "./models/message.model.js";

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { arcjetMiddleware } from "./middleware/arcjet.middleware.js";

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

const bootStrap = async () => {
  try {
    server.listen(ENV.PORT, () => {
      console.log(`Server is listning to the port http://localhost:${ENV.PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start", error);
    process.exit(1);
  }
};

bootStrap();
export default app;