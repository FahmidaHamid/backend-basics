// basic crud api
const express = require("express");
const app = express();
app.use(express.json()); // middleware, help parse json data

const port = process.env.PORT || 3000; // use local port 3001 or any other port set by your environment

app.get("/", async (req, res) => {
  res.send("Backend Basics...");
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
