const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Replace with your MongoDB connection string
const uri = "mongodb://127.0.0.1:27017/student";
mongoose.connect(uri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Since the data is stored in an array within a single document,
// we will create a schema and model for the document that contains the 'cse' field.
const StudentSchema = new mongoose.Schema({
  students: [
    {
      uid: Number,
      sem1: Number,
      sem2: Number,
      cgpa:Number,
    
    },
  ],
});

const StudentDocument = mongoose.model("Students", StudentSchema);

// Routes
app.get("/students", async (req, res) => {
  try {
    const doc = await StudentDocument.findOne();
    res.json(doc.students);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/students/:uid", async (req, res) => {
  try {
    const doc = await CoursesDocument.findOne();
    const course = doc.students.find((c) => c.uid === req.params.uid);
    res.json(course);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.post("/students", async (req, res) => {
  try {
    const doc = await StudentDocument.findOne();
    doc.students.push(req.body);
    await doc.save();
    res.status(201).send("student added successfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
