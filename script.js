// Write your JavaScript code here!
// require('scriptHelper');

// const { pickPlanet } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let button = document.querySelector(".launchedForm")
    console.log(button);
    button.addEventListener("submit", function(event) {
        console.log("submit trigger")
        event.preventDefault()
        let pilot = document.querySelector("input[name=pilotName]").value 
        // alert(pilot)
        let list = document.getElementById("faultyItems")
        let doc = document
        let copilot = document.querySelector("input[name=copilotName]").value
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value
        let cargoMass = document.querySelector("input[name=cargoMass]").value



        formSubmission(doc, list, pilot, copilot, fuelLevel, cargoMass)
    });
    


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       let selectedPlanet = pickPlanet(listedPlanets);
       console.log(selectedPlanet);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, 
        selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
//add event listener for when they give input and click submit button. Then get input values and pass into
//the form submission method. 

});