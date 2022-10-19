// Link required packages and routes
const express = require('express');
const path = require('path');
const api = require('./routes/notes.js');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// get route for landing page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// get route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// establish port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);