const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const PORT = 3000;

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

app.use(express.json());
app.use(express.static("public"));

let students;

async function startServer() {
  try {
    await client.connect();

    console.log("MongoDB connected successfully! ✅");

    const db = client.db("studentDB");
    students = db.collection("students");

    app.listen(PORT, () => {
      console.log(`Website running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Error ❌");
    console.log(error);
  }
}

// ADD STUDENT
app.post("/students", async (req, res) => {
  const student = {
    name: req.body.name,
    age: Number(req.body.age),
    department: req.body.department,
  };

  const result = await students.insertOne(student);

  res.json({
    message: "Student added successfully! 🎓",
    id: result.insertedId,
  });
});

// GET ALL STUDENTS
app.get("/students", async (req, res) => {
  const allStudents = await students.find().toArray();

  res.json(allStudents);
});

// UPDATE STUDENT
app.put("/students/:id", async (req, res) => {
  const id = req.params.id;

  const updatedStudent = {
    name: req.body.name,
    age: Number(req.body.age),
    department: req.body.department,
  };

  await students.updateOne({ _id: new ObjectId(id) }, { $set: updatedStudent });

  res.json({
    message: "Student updated successfully! ✏️",
  });
});
// DELETE STUDENT
app.delete("/students/:id", async (req, res) => {
  const id = req.params.id;

  await students.deleteOne({
    _id: new ObjectId(id),
  });

  res.json({
    message: "Student deleted successfully! 🗑️",
  });
});

startServer();
