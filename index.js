const express = require("express");
const app = express();

app.get("/callback", (req, res) => {
  res.send("Callback received successfully!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
