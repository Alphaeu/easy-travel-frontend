#!/bin/bash

# Login to Heroku (only if not already authenticated)
heroku login

# Creates a new Heroku app with a unique name
heroku create easy-travel-backend_v1

# Set Heroku environment variables if needed
heroku config:set NODE_ENV=production
# Add more environment variables as needed:
# heroku config:set JWT_SECRET=your_jwt_secret
# heroku config:set MONGODB_URI=your_mongodb_uri
# heroku config:set STRIPE_SECRET_KEY=your_stripe_secret_key

# Deploy your code to Heroku
git push heroku main

# Optionally, run migrations or other setup commands
heroku run npm run migrate

# Open the deployed app in the browser
heroku open

