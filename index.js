let userPreference = "Sugar-free"; // Possible values: 'Regular', 'Sugar-free', or undefined
if (userPreference==="regular"){
    console.log("User prefers Regular Monster Energy drink");
}
else if(userPreference==='sugar-free'){
    console.log("User prefers Sugar-free Monster Energy drink.");
}
else{
    console.log(`User preference is not set,defaulting to Regular Monster Energy drink.`);
}


let cansLeft = 3; // Any number of cans
console.log(cansLeft< 5? "Time to restock": "We're stocked!");


// #### Challenge 3: Workout Intensity


let heartRate = 95; // Current heart rate in bpm
console.log(heartRate < 100 ? "Boost needed!" : "Energy levels are high!");


let currentTemp = 4; // Current temperature in °C
console.log(currentTemp<= 5 ?"Chilled to perfection!":"Needs a cooler!");



// Define the current hour in 24-hour format
let currentHour = 22; 
if (currentHour >= 7 && currentHour < 24) {
    console.log("Unleash the beast!");
} else {
    console.log("Better stick to water.");
}
