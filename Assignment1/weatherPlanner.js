// Weather Activity Planner

let temperature = 28;   // in °C
let isRaining = false;  // true / false
let windSpeed = 12;     // in km/h

let message = "";

// Check weather conditions using logical operators
if (isRaining) {
  message = "Stay indoors with hot coffee.";
}
else if (temperature > 35) {
  message = "Go swimming.";
}
else if (temperature < 15 && windSpeed > 20) {
  message = "Too cold and windy — stay home.";
}
else {
  message = "Perfect day for a walk.";
}

// Output
console.log(" Weather Activity Planner ");
console.log("Temperature:", temperature + "°C");
console.log("Raining:", isRaining);
console.log("Wind Speed:", windSpeed + " km/h");
console.log("Recommendation:", message);