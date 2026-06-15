const express = require("express");

const app = express();
const logger = require(".middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");



app.use(express.json());
app.use(logger);
app.use(errorHandler); 

const noteRoutes = require("./routes/noteRoutes");

app.use("/notes", noteRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
}); 