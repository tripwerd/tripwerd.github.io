const express = require('express');
const { MongoClient } = require('mongodb');

// Initialize an Express app
const app = express();
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

// Middleware to parse incoming JSON requests
app.use(express.json());

// Route handler for saving a calculation
app.post('/calculate', async (req, res) => {
  try {
    // Connect to MongoDB
    await client.connect();

    // Access the database and collection
    const db = client.db('calculatorDB');
    const collection = db.collection('calculations');

    // Create a new document with the request data and a createdAt timestamp
    const calculation = {
      ...req.body,
      createdAt: new Date(),
    };

    // Insert the document into the collection
    const insertResult = await collection.insertOne(calculation);
    // Respond with the inserted document's ID
    res.json({ _id: insertResult.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while saving the calculation.' });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
