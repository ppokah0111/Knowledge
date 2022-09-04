/* Assignment:
1. create employee class
2. have employe name, age, base salary, bonus salary, address
3. create a function that prints all the details
4. create a function to print total salary */

class Employee {
    constructor(name, age, baseSalary, bonusSalary, address) {
        this.name = name;
        this.age = age;
        this.baseSalary = baseSalary;
        this.bonusSalary = bonusSalary;
        this.address = address;
    }

    print() {
        console.log(`\nEmployee details are as follows: `);
        console.log(`name is ${this.name } `);
        console.log(`age is ${this.age } `);
        console.log(`base Salary is ${this.baseSalary } `);
        console.log(`bonus Salary is ${this.bonusSalary } `);
        console.log(`Address is ${this.address }`);
        console.log(`(bonus + base) Salary is `, this.bonusSalary + this.baseSalary, );
        console.log(`Or Total Salary is ${this.bonusSalary + this.baseSalary}`);

        /*   personalDetails1()
              personalDetails()
              incomeDetails()
              totalIncomeDetails() */

        //console.log(`Number of Cars:`, otherDetails.noOfCars `)
    }
}

let personalDetails1 = () =>
    console.log(`
                    the Employee name is ${e1.name}, age is ${e1.age}
                    and address is ${e1.address}
                    `);

function personalDetails() {
    console.log(`
                    the Employee name is ${e1.name}, age is ${e1.age}
                    and address is ${e1.address}
                    `);
}

function incomeDetails() {
    console.log(`
                    the base salary is ${e1.baseSalary}, bonus salary is ${e1.bonusSalary}
                    `);
}

function totalIncomeDetails() {
    console.log(`
                    the total salary is ${e1.baseSalary + e1.bonusSalary }
                    `);
}


const otherDetails = {
    noOfCars: 4,
    noOfHouses: 7,
    noOfPhones: 8
}

let e1 = new Employee("Adeola", 27, 218000, 16000, "Cape Town, South Africa ");
e1.print();