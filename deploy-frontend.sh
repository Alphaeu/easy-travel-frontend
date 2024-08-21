#!/bin/bash

# Install dependencies
npm install

# Build the project
npm run build

# Login to Netlify
netlify login

# Set environment variables for the project
export REACT_APP_API_URL="http://localhost:3000"
export REACT_APP_API_BASE_URL="https://wanderwings-1721685937-14a5fb6a89c4.herokuapp.com/"
export REACT_APP_GOOGLE_MAPS_API_KEY="AIzaSyDN6YR6VS85kv6PcQoQl9xQcwrfCQXTVqU"
export REACT_APP_STRIPE_SECRET_KEY="sk_test_51PbHqeHazhScmZJHsYXGxvh0Bbl70Q9BO6tEHTmIXsswGwPzIkXQKcwIOdjClXpFavExeHgXKUBcldmOQomaIvdA00qvsgHEjP"
export REACT_APP_PAYPAL_CLIENT_ID="Ad78vEojnfUMhYF4tfT-w0k00zIuNfh2cDfdy-BQOuXYS3Ki4vpmpCMCvE4i67dC4zvw2lENDHX0MUfP"
export REACT_APP_PAYPAL_CLIENT_SECRET="EN0C31jRns5_H9Rk6t8zfGR2z0FXzwWWnCcou7UfNnXtk8nlkyb2ZCwq-VKLm3ewsye-o34PLE88G_Bn"

# Initialize a new site or link to an existing site
netlify init --manual --build "npm run build" --dir "build" <<EOF
2
Alpha
easy-travel-frontend
EOF

# Deploy the site to production
netlify deploy --prod --dir=build




