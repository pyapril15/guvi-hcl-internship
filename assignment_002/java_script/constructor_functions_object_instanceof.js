// Create a constructor function Vehicle with a property type
function Vehicle(type) {
    this.type = type;
}

console.log("Constructor function Vehicle created");
console.log("-----------------------------------");

// Create an object car using new Vehicle("Car")
let car = new Vehicle("Car");

console.log("Object car created using new Vehicle('Car')");
console.log("Car object:", car);
console.log("Car type:", car.type);
console.log("-----------------------------------");

// Use instanceof to check if car is an instance of Vehicle and Object
let isVehicleInstance = car instanceof Vehicle;
let isObjectInstance = car instanceof Object;

// Print the results
console.log("instanceof checks:");
console.log("car instanceof Vehicle:", isVehicleInstance);
console.log("car instanceof Object:", isObjectInstance);
console.log("-----------------------------------");

// Additional demonstration with more examples
console.log("Additional demonstrations:");

// Create another vehicle
let bike = new Vehicle("Bike");
console.log("\nCreated bike:", bike);
console.log("bike instanceof Vehicle:", bike instanceof Vehicle);
console.log("bike instanceof Object:", bike instanceof Object);

// Show that regular objects are not instances of Vehicle
let regularObject = { type: "Regular" };
console.log("\nRegular object:", regularObject);
console.log("regularObject instanceof Vehicle:", regularObject instanceof Vehicle);
console.log("regularObject instanceof Object:", regularObject instanceof Object);

// Show constructor property
console.log("\nConstructor property checks:");
console.log("car.constructor === Vehicle:", car.constructor === Vehicle);
console.log("bike.constructor === Vehicle:", bike.constructor === Vehicle);