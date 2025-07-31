require('dotenv').config();//for environment variables
const express = require('express');
const mongoose = require('mongoose');
const contactRoutes= require('./routes/contactRoutes');
const cors=require('cors');
const rateLimit=require('express-rate-limit');
const helmet=require('helmet'); 

const app = express();
//middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

//connect to mongoose using an iife js
(async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
})();

//routes
app.use('/api/contact',contactRoutes);
app.get('/',(req,res)=>{
    res.send('running')
})
const PORT = process.env.PORT||5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});