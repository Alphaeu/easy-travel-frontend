#!/bin/bash

# Install dependencies
npm install

# Build the project
npm run build

# Login to Netlify
netlify login

# Initialize a new site or link to an existing site
netlify init --manual --build "npm run build" --dir "build" <<EOF
2 
Alpha
easy-travel-frontend
EOF

# Deploy the site
netlify deploy --prod --dir=build


