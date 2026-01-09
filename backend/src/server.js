const express = require("express");
const pool = require("./db");

const app = express();
app.use(express.json());

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({
      status: "healthy",
      database: "connected",
      timestamp: new Date().toISOString()
    });
  } catch {
    res.json({
      status: "healthy",
      database: "disconnected",
      timestamp: new Date().toISOString()
    });
  }
});

app.listen(8000, () => {
  console.log("API running on 8000");
});
