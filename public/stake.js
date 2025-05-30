const fetch = require("node-fetch");

const apiUrl = "https://stake.games/api/auth";
const token = "87a2c807ed04b52c0572a9c0d15101812e336c9f5fee212edd84fa4f336cdd458ff7939e06f7d7a191a8c5f7c4062309";

fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
