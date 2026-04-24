const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "https://test2-alpha-blond.vercel.app",
  "http://localhost:3000",
  "http://localhost:5173",
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error(`Not allowed by CORS: ${origin}`));
  },
  methods: ["GET", "POST", "OPTIONS"],
};

// Middleware
app.use(express.json());

// ✅ CORS Configuration
app.use(cors(corsOptions));
app.options("/api/items", cors(corsOptions));

// Routes
app.use("/api/items", require("./routes/itemRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});