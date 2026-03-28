import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = 5001;

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });
}

startServer();