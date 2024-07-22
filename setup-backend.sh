#!/bin/bash

# Create directories
mkdir -p easy-travel-backend/config
mkdir -p easy-travel-backend/controllers
mkdir -p easy-travel-backend/middleware
mkdir -p easy-travel-backend/models
mkdir -p easy-travel-backend/routes
mkdir -p easy-travel-backend/utils

# Create config files
touch easy-travel-backend/config/db.js
touch easy-travel-backend/config/redis.js

# Create controller files
touch easy-travel-backend/controllers/authController.js
touch easy-travel-backend/controllers/flightController.js
touch easy-travel-backend/controllers/userController.js

# Create middleware files
touch easy-travel-backend/middleware/authMiddleware.js
touch easy-travel-backend/middleware/errorHandler.js

# Create model files
touch easy-travel-backend/models/User.js
touch easy-travel-backend/models/Flight.js
touch easy-travel-backend/models/Booking.js
touch easy-travel-backend/models/Notification.js

# Create route files
touch easy-travel-backend/routes/authRoutes.js
touch easy-travel-backend/routes/flightRoutes.js
touch easy-travel-backend/routes/userRoutes.js

# Create utility files
touch easy-travel-backend/utils/emailService.js
touch easy-travel-backend/utils/paymentService.js
touch easy-travel-backend/utils/notificationService.js

# Create main entry point file
touch easy-travel-backend/server.js

# Boilerplate for main entry point files
echo "const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;" > easy-travel-backend/config/db.js

echo "const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis client connected');
});

client.on('error', (err) => {
  console.log('Something went wrong ' + err);
});

module.exports = client;" > easy-travel-backend/config/redis.js

echo "const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};" > easy-travel-backend/middleware/authMiddleware.js

echo "const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
};

module.exports = errorHandler;" > easy-travel-backend/middleware/errorHandler.js

echo "const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);" > easy-travel-backend/models/User.js

echo "const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');
const flightRoutes = require('./routes/flightRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(\`Server started on port \${PORT}\`);
});" > easy-travel-backend/server.js

echo "File structure created successfully."

