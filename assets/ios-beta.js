window.location.href = "itms-beta://testflight.apple.com/join/BQ3XlrGX";

const header = document.getElementById("header");
setTimeout(() => {
header.innerText = "Waited 3 seconds. Maybe you don't have the TestFlight app?";
console.log("I waited!");
}, 3000);

