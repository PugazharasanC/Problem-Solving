const obj = {
    name: "Pugazh",
    age: 20,
    address: {
        doorNo: 12,
        streetName: "North Street",
        area: "Area Name",
        landmark : "Next to a ice cream shop",
        city: "City Name",
        state: "State Name",
        pin: 600012
    },
    getBirthYear: function () {
        return new Date().getFullYear() - this.age;
    },
    getFullAddress: function () {
        return`${this.address.doorNo}, ${this.address.streetName}, 
${this.address.area}, ${this.address.landmark}, 
${this.address.city}, ${this.address.state}, 
${this.address.pin}`
    }
}
console.log(obj.getBirthYear());
console.log(obj.getFullAddress());