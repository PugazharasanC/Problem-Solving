// Write a function that takes a JSON object and a path (string representing the path to a property in the object, e.g., "person.address.city") and returns the value at that path in the object. Handle cases where the path is invalid.

const obj = {
    name: "Pugazh",
    age: 20,
    address: {
        doorNo: 12,
        streetName: "North Street",
        area: "Area Name",
        landmark: "Next to a ice cream shop",
        city: "City Name",
        state: "State Name",
        pin: 600012
    },
    getBirthYear: function () {
        return new Date().getFullYear() - this.age;
    },
    getFullAddress: function () {
        return `${this.address.doorNo}, ${this.address.streetName}, 
${this.address.area}, ${this.address.landmark}, 
${this.address.city}, ${this.address.state}, 
${this.address.pin}`
    }
}



function getData(obj, path) {
    const pathArr = path.split(".");

    if (!obj) return undefined;
    
    if (pathArr.length === 1) return obj[pathArr[0]];
    
    return getData(obj[pathArr[0]], pathArr.slice(1).join("."))
}
console.log(getData(obj, "address.city"))
console.log(getData(obj, "name"))
console.log(getData(obj, "address.pin"))
console.log(getData(obj, "address.pincode"))
console.log(getData(obj, "address"))