class Vehicle {
    constructor(type, color) {
        this.type = type
        this.color = color
    }
    print() {
        console.log(`The vehichle type is ${this.type}. `)
        console.log(`The color is ${this.color}. `)
    }
}
class Truck extends Vehicle {
    constructor(type, color, loadCapacity) {
        super(type, color) // calls the constructor of the extended base class
        this.loadCapacity = loadCapacity
    }
    print() {
        super.print()
        console.log(`The load capacity is ${this.loadCapacity}. `)
    }
}
var T1 = new Truck("Heavy", "Red", 110)
T1.print()