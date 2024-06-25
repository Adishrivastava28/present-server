const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Dummy data for the list of people under different managers
const managers = {
  Dipayan: [
    { name: "Swapnil Dharia", position: "Developer" },
    { name: "Virendra Mishra", position: "Developer" },
    { name: "Abhijeet Vaidya", position: "Developer" },
    { name: "Lokesh Munisamaiah", position: "Developer" },
    { name: "Akshay S P", position: "Developer" },
    { name: "Amrit Bansal", position: "Developer" },
    { name: "Manas Churi", position: "Developer" },
    { name: "Bajrang .", position: "Developer" },
    { name: "Sonal Grover", position: "Developer" },
    { name: "Prachi Sharma", position: "Developer" },
    { name: "Sampoorn Shekhar", position: "Developer" },
    { name: "Simran Chhabra", position: "Developer" },
    { name: "Pavithra S", position: "Developer" },
    { name: "Subho Dev Roy", position: "Developer" },
    { name: "Ekansh Gupta", position: "Developer" },
    { name: "Abhishek Bharadwaz", position: "Developer" },
    { name: "Jayaprakash Patra", position: "Developer" },
    { name: "Janani R", position: "Developer" },
    { name: "Kotla Rishika Reddy", position: "Developer" },
    { name: "Ujjwal Jain", position: "Intern" },
    { name: "Aditya Shrivastava", position: "Intern" },
    { name: "Saksham Gupta", position: "Intern" },
    { name: "Sparsh Jain", position: "Intern" },
    { name: "Sunidhi Yadav", position: "Intern" },
    { name: "Riya Kasture", position: "Intern" },
    { name: "Lakshana Ravi Shankar", position: "Developer" },
  ],
  Meena: [
    { name: "Timo Vogelgesang", position: "Developer" },
    { name: "Henry Cao", position: "Designer" },
    { name: "NT Munusamy", position: "Manager" },
    { name: "Viswanath Natesan", position: "Analyst" },
    { name: "Arvind Ganju", position: "Developer" },
    { name: "Smita Singh", position: "Designer" },
    { name: "Alexandra Dieudonne", position: "Manager" },
    { name: "Sakshi Malhotra", position: "Analyst" },
    { name: "Andreas Loell", position: "Developer" },
    { name: "Thomas Weiler", position: "Designer" },
    { name: "Divya Thampi", position: "Manager" },
    { name: "Urvashi Dhar", position: "Analyst" },
    { name: "Dipayan Datta", position: "Developer" },
    { name: "Vikash Agarwal", position: "Designer" },
    { name: "Ralf Jung", position: "Analyst" },
  ],
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
    res.status(200).json(people); // Send 200 status code with the response
  } else {
    res.status(404).json({ error: "Manager not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
