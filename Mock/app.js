// Define an enum for CustomerType 
var CustomerType;
(function (CustomerType) {
    CustomerType[CustomerType["Regular"] = 0] = "Regular";
    CustomerType[CustomerType["Premium"] = 1] = "Premium";
    CustomerType[CustomerType["VIP"] = 2] = "VIP";
})(CustomerType || (CustomerType = {}));
// Create a class that implements the Customer interface 
class EventCustomer {
    constructor(id, name, email, type, registrationDate) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.type = type;
        this.registrationDate = registrationDate;
    }
    getDetails() {
        return `Customer [ID: ${this.id}, Name: ${this.name}, Email: 
${this.email}, Type: ${CustomerType[this.type]}, Registered On: 
${this.registrationDate.toDateString()}]`;
    }
}
const customer1 = new EventCustomer(1, 'Alice', 'alice@gmail.com', CustomerType.Premium, new Date('2023-01-15'));
console.log(customer1.getDetails());
const customer2 = new EventCustomer(2, 'Bob', 'bob@gmail.com', CustomerType.Regular, new Date('2023-02-20'));
console.log(customer2.getDetails());
