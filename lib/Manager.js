// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee{
    constructor( name, id, email, officeNumber){
        super(name,id, email, "Manager")
        this.officeNumber = officeNumber;
    }
    printInfo() {
     
    }
}
 const manager = new Manager(`${this.name}, ${this.id},  ${this.email}, "Manager", ${this.officeNumber}`);
 intern.printInfo();
module.exports = Manager;