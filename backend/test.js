const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const express = require("express")
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://bill:HVai2JLkfbG5ljxG@medisell.uhzwqm8.mongodb.net/";
const client = new MongoClient(uri);

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

// const StudentSchema = new mongoose.Schema({
// cse: [
//     {
//       uid: Number,
//       sem1: Number,
//       sem2: Number,
//       cgpa: Number,
      
//     },
//   ],
// });
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
  uid: {
    type: Number,
    required: true,
   
  },
  sem1: {
    type: Number,
    required: true,
  },
  sem1: {
    type: Number,
    required: true,
  },
  sem2: {
    type: Number,
    required: true,
  },
  cgpa:{
    type:Number,
    required: true,
  }

});

// const main = async () => {
//     await client.connect();
//     const db = client.db("test");
//     const collection = db.collection("admin");
  
//     await collection.insertOne(data1);
//     console.log(data);
//     return "done";
//   };

  // Create a model
// const student = mongoose.model("student", StudentSchema);

//   const user1 = new student({
//     username: 101,
//     password: 7.0,
//     sem2: 6.8,
//     cgpa: 6.9,
//   });
//   const user2 = new student({
//     uid: 102,
//     sem1: 8.0,
//     sem2: 6.8,
//     cgpa: 7.9,
//   });
//   const user3 = new student({
//     uid: 103,
//     sem1: 5.0,
//     sem2: 2.8,
//     cgpa: 3.9,
//   });
//   const user4 = new student({
//     uid: 104,
//     sem1: 4.0,
//     sem2: 5.8,
//     cgpa: 4.9,
//   });

  const addUsersToDB = async () => {
    try {
      await user1.save();
      console.log("User 1 added successfully!");
      await user2.save();
      console.log("User 2 added successfully!");
      await user3.save();
      console.log("User 3 added successfully!");
      await user4.save();
      console.log("User 4 added successfully!");
    } catch (error) {
      console.error("Error adding users:", error);
    }
  };
  addUsersToDB();

   app.get("/students",(req,res)=>
   {
    res.json(student.user1);
   })

app.get("/product", async (req, res) => {
    try {
      const doc = await student.findOne();
      res.json(doc.cse);
    } catch (error) {
      res.status(500).send(error);
    }
  });



  
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

  

  