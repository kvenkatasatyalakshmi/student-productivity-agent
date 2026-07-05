const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

connectDB();
app.use(express.json());

// ✅ Enable CORS before routes
app.use(cors({ origin: 'http://localhost:3000' }));

// ✅ Now mount routes
app.use('/api/tasks', require('./routes/tasks'));

app.listen(5000, () => console.log('Server running on port 5000'));
