const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./src/routes/passwordRoutes");

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API Working Successfully");
});

module.exports = app;

// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Routes
// const authRoutes = require("./src/routes/passwordRoutes");
// app.use("/api/auth", authRoutes);

// const PORT = 3000;
// app.get("/", (req, res) => {
//   res.send("API Working Successfully");
// });
// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`Server running on port ${PORT}`);
// });