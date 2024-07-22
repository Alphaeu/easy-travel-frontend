#!/bin/bash

# Create directories
mkdir -p easy-travel/public
mkdir -p easy-travel/src/components
mkdir -p easy-travel/src/pages

# Create component files
touch easy-travel/src/components/Header.js
touch easy-travel/src/components/Footer.js
touch easy-travel/src/components/FlightSearch.js
touch easy-travel/src/components/FlightResults.js
touch easy-travel/src/components/BookingForm.js
touch easy-travel/src/components/UserProfile.js
touch easy-travel/src/components/RealTimeStatus.js
touch easy-travel/src/components/LiveChat.js

# Create page files
touch easy-travel/src/pages/HomePage.js
touch easy-travel/src/pages/SearchPage.js
touch easy-travel/src/pages/BookingPage.js
touch easy-travel/src/pages/ProfilePage.js
touch easy-travel/src/pages/StatusPage.js

# Create other source files
touch easy-travel/src/App.js
touch easy-travel/src/index.js
touch easy-travel/src/styles.css

echo "Directory structure and files created successfully."

