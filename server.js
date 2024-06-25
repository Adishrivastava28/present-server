const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Dummy data for the list of people under different managers
const managers = {
  JohnManager: [
    { name: "Alice", position: "Developer" },
    { name: "Bob", position: "Designer" },
  ],
  JaneManager: [
    { name: "Charlie", position: "Developer" },
    { name: "Dave", position: "Tester" },
  ],
};

// Route to fetch a list of people under a specific manager
app.get("/people/:managerName", (req, res) => {
  const managerName = req.params.managerName;

  const people = managers[managerName];
  if (people) {
    res.json(people);
  } else {
    res.status(404).json({ error: "Manager not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
