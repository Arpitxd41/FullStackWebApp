// server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.get('/products', async (req, res) => {
  try {
    let apiUrl = 'https://dummyjson.com/products';

    if (req.query.category) {
      apiUrl = `https://dummyjson.com/products/category/${req.query.category}`;
    }

    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

// app.get('/products/category/:category', async (req, res) => {
//   try {
//     const apiUrl = `https://dummyjson.com/products/category/${req.params.category}`;

//     const response = await axios.get(apiUrl);
//     res.json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       error: 'Internal Server Error', 
//       message: error.message });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
