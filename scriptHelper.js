// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let info = `
   <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
   `;


const target = document.getElementById("missionTarget");
target.innerHTML = info;


    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (testInput == "") {
        return "Empty"
    }
    if (isNaN(testInput)) {
        return "Not a Number"

    } else {
        return "Is a Number"
    }




}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus")
    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("All fields required")
    }
    if (validateInput(pilot) !== "Not a Number") {
        alert("Pilot name cannot be a number");
    }
    if (validateInput(copilot) !== "Not a Number") {
        alert("Copilot name cannot be a number");
    }
    if (validateInput(fuelLevel) !== "Is a Number") {
        alert("Fuel Level has to be a number");
    }
    if (validateInput(cargoMass) !== "Is a Number") {
        alert("Cargo Level has to be a number");
    } else {
        list.style.visibility = "visible"

    }
    //add if statements

    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = "Fuel level is too low"
        list.style.visibility = "visible"
        launchStatus.innerHTML = "Shuttle not ready for launch"
        document.getElementById("launchStatus").style.color = "red";

    }
    if (cargoMass > 10000) {
        fuelStatus.innerHTML = "Too much mass for shuttle to take off"
        list.style.visibility = "visible"
        launchStatus.innerHTML = "Shuttle not ready for launch"
        document.getElementById("launchStatus").style.color = "red";

    } else {
        launchStatus.innerHTML = "Shuttle is ready for launch"
        document.getElementById("launchStatus").style.color = "green";
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then
        (function (response) {
            return response.json()

        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return (planets[(Math.floor(Math.random() * planets.length))]);
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
