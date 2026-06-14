const express = require("express");

const app = express();

app.use(express.json());

const noteRoutes = require("./routes/noteRoutes");

app.use("/notes", noteRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
}); 