const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

app.use(express.json());

app.post('/calculate', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('calculatorDB');
    const collection = db.collection('calculations');
    const calculation = {
      ...req.body,
      createdAt: new Date(),
    };
    const insertResult = await collection.insertOne(calculation);
    res.json({ _id: insertResult.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while saving the calculation.' });
  } finally {
    await client.close();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
