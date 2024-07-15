const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const Item = require('../models/item'); // Import the Item model

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var corsOption = 
{
    origin:"http://localhost:3000"
}

mongoose.connect('https://cloud.mongodb.com/v2/6694d46e1aeddd70fc59fcd6#/metrics/replicaSet/6694d507655f9f7a48229801/explorer/Write_Ups/write_ups/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post('/api/writeups', upload.single('image'), async (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? req.file.filename : null;

  const newItem = new Item({ title, content, image });
  await newItem.save();

  res.json(newItem);
});

app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
