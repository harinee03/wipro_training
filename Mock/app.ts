// Define an enum for CustomerType 
enum CustomerType { 
    Regular, 
    Premium, 
    VIP 
} 
// Define an interface for Customer 
interface Customer { 
    id: number; 
    name: string; 
    email: string; 
    type: CustomerType; 
    registrationDate: Date; 
    getDetails(): string; 
} 
// Create a class that implements the Customer interface 
class EventCustomer implements Customer { 
    constructor( 
        public id: number, 
        public name: string, 
        public email: string, 
        public type: CustomerType, 
        public registrationDate: Date 
    ) {} 
    getDetails(): string { 
 
        return `Customer [ID: ${this.id}, Name: ${this.name}, Email: 
${this.email}, Type: ${CustomerType[this.type]}, Registered On: 
${this.registrationDate.toDateString()}]`; 
    } 
} 
const customer1 = new EventCustomer(1, 'Alice', 'alice@gmail.com', 
CustomerType.Premium, new Date('2023-01-15')); 
console.log(customer1.getDetails());
const customer2 = new EventCustomer(2, 'Bob', 'bob@gmail.com', 
CustomerType.Regular, new Date('2023-02-20')); 
console.log(customer2.getDetails());