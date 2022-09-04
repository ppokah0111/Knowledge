class Student {
    constructor(sname, age) {
        this.sname = sname
        this.age = age
    }

    print() {
        console.log(`Student name is ${this.sname} and age is ${this.age}`)
        console.log("Student name is", this.sname, "and age is ", this.age)
    }
}

let s1 = new Student("John", 12)
s1.print()