// ? What is Deep Clone ?
// * A cloned object is a copy of the original object which resides in seperate memory.
// * Cloned objects are independent of the original object.

function compareObjs(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let key in obj1) {
        if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
            if (!compareObjs(obj1[key], obj2[key])) {
                return false;
            }
        } else if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}


function cloneObject(obj) {
    let clone = {}
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            clone[key] = cloneObject(obj[key])
        } else {
            clone[key] = obj[key]
        }
    }
    return clone;
}
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
const clonedObj = cloneObject(obj);
console.log(compareObjs(obj, clonedObj))
clonedObj.address.doorNo = 13;
console.log(compareObjs(obj, clonedObj))