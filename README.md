# 🌤 Weather App

A React Weather App that allows users to check the **current weather** and **5-day forecast** for any city or their **current location**, using the OpenWeather API.

---

##Features

- Search weather by **city name**  
- Get weather based on your **current location**  
- Display **temperature**, **weather description**, and **weather icons**  
- Show a **5-day forecast** in a clear layout  
- **Error handling** for invalid city names or location issues  

---

## Technology Stack

- **React**  
- **Axios** (for API requests)  
- **OpenWeather API**  
- HTML, CSS, JavaScript  

---

##Installation
🚀 Getting Started
1. **Clone the repository:**
   
 bash

 git clone https://github.com/AshokLama/WeatherApp-Frontend.git

3. Install Dependencies
npm install


4. Get API Key
Go to: https://openweathermap.org/api
Sign up and generate a free API key

5. Configure API Key
Open src/App.js and replace:
Default key: a23c5c07aa355e1c6945a80a5803588b
const API_KEY = "YOUR_API_KEY_HERE";

with your actual API key.

5. Run the App
npm start

The app will run on:
http://localhost:3000


📂 Project Structure
weather-app/
│
├── public/
├── src/Component 
          |-Search.js           #calls a function in App.js
          |-WeatherCard.js      # displays current weather
          |-Forecast.js         #displays forecast

│   ├── App.js                  # fetches current weather + 5-day forecast from OpenWeather API
│   ├── App.css                 # Styling
│   └── index.js                # Entry point
│
├── package.json
└── README.md


⚙️ How It Works
🔹 Fetch Current Weather
Uses OpenWeather /weather endpoint
Fetches data based on:
City input OR
Latitude & Longitude (Geolocation)

🔹 Fetch 5-Day Forecast
Uses /forecast endpoint
API returns data every 3 hours
We filter data:
index % 8 === 0

→ This selects one forecast per day (24 hours)

🔹 Geolocation
Uses browser API:
navigator.geolocation.getCurrentPosition()


🔹 Error Handling
Handled using try...catch:
If city not found → show message
Please enter a city
Reset UI on error

🌐 API Used
OpenWeather API:
Current Weather:
https://api.openweathermap.org/data/2.5/weather

5-Day Forecast:
https://api.openweathermap.org/data/2.5/forecast


🎨 UI Features
Weather icons from OpenWeather
Simple card layout for forecast
Responsive flexbox layout
Clean and minimal design






