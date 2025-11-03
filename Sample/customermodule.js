var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Enum for role
var Role;
(function (Role) {
    Role["Attendee"] = "Attendee";
    Role["Organizer"] = "Organizer";
    Role["Vendor"] = "Vendor";
})(Role || (Role = {}));
// A simple decorator to log creation
function LogCreation(prefix) {
    return function (constructor) {
        const newConstructor = function (...args) {
            console.log(`${prefix} Creating instance of ${constructor.name}`, args);
            return new constructor(...args);
        };
        newConstructor.prototype = constructor.prototype;
        return newConstructor;
    };
}
let Customer = class Customer {
    constructor(id, name, email, role, contact) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.contact = contact;
    }
};
Customer = __decorate([
    LogCreation('[CustomerModule]')
], Customer);
// Manager class with iterator and basic CRUD (in-memory)
class CustomerManager {
    constructor() {
        this.customers = [];
    }
    addCustomer(c) {
        this.customers.push(c);
    }
    findByEmail(email) {
        return this.customers.find(c => c.email === email);
    }
    updateCustomer(id, patch) {
        const idx = this.customers.findIndex(c => c.id === id);
        if (idx >= 0) {
            this.customers[idx] = Object.assign(Object.assign({}, this.customers[idx]), patch);
        }
    }
    *[Symbol.iterator]() {
        for (const c of this.customers) {
            yield c;
        }
    }
}
// Example usage
const manager = new CustomerManager();
manager.addCustomer(new Customer(1, 'Alice', 'alice@gmail.com', Role.Attendee, ['+1', 1234567890]));
manager.addCustomer(new Customer(2, 'Bob', 'bob@gnail.com', Role.Organizer, ['+44', 9876543210]));
const customer = manager.findByEmail('alice@gmail.com');
console.log('Found Customer:', customer);
manager.updateCustomer(1, { name: 'Alice Smith' });
for (const cust of manager) {
    console.log('Iterating Customer:', cust);
}
export { Role, Customer, CustomerManager };
