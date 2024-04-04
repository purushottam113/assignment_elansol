const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Example API endpoint to fetch user data
const users = [{ id: 10, name: 'Purushottam',date: '22/04/2005',role: 'Admin', status: 'offline', action: 'remove' },
              { id: 20, name: 'Sushant',date: '22/04/2005',role: 'Admin', status: 'offline', action: 'remove' },
              { id: 30, name: 'Omkar',date: '22/04/2005',role: 'Admin', status: 'offline', action: 'remove' },
              { id: 40, name: 'Shree',date: '22/04/2005',role: 'Admin', status: 'offline', action: 'remove' },
              { id: 50, name: 'Prasad',date: '22/04/2005',role: 'Admin', status: 'offline', action: 'remove' }

];

app.get('/api/users', (req, res) => {
  try {
    // Fetch user data from the database or any other data source
    res.json(users);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, 'public')));

// Define route to serve React app's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
