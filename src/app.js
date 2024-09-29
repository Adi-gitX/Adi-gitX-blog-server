const express = require('express');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');
const logger = require('./utils/logger');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger); // Use the logger middleware

// Routes
app.use('/api/blogs', blogRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
