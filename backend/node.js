// const express =require( "express");
// const app =express();
// const port =3000;
// const { MongoClient } = require("mongodb");
// app.use(express.json());



// // Replace the uri string with your connection string.
// const uri = "mongodb://localhost:27017";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db('test');
//     const movies = database.collection('admin_pod');
   

//     // Query for a movie that has the title 'Back to the Future'
//     //const query = { product: "Magepan" };
//     // const pro = await product.findOne(query);

//     console.log("done");
//   }
//   catch(err){
//     console.log("error");
// }
//   finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
// app.listen(port,()=>{
//     console.log(`listening on port ${port}`);
// });


const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3003;

// Middleware to parse JSON in the request body
app.use(express.json());

// Replace the uri string with your MongoDB connection string.
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to the database");

    // Specify the database and collection
    const database = client.db('test');
    const movies = database.collection('admin_pod');

    // Query for a movie that has the title 'Back to the Future'
    // const query = { product: "Magepan" };
    // const pro = await product.findOne(query);

    console.log("done");
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    // Ensure that the client will close when you finish/error
    await client.close();
    console.log("Connection closed");
  }
}

// Start the Express server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Call the run function to establish the MongoDB connection
run().catch(console.dir);
