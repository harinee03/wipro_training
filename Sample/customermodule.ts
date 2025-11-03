
interface ICustomer {
    id: number;
    name: string;
    email: string;
    role: Role;
    contact: [string, number]; // tuple: [phoneCountryCode, phoneNumber]
}
// Enum for role
enum Role {
    Attendee = 'Attendee',
    Organizer = 'Organizer',
    Vendor = 'Vendor'
}
// A simple decorator to log creation
function LogCreation(prefix: string) {

    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        const newConstructor: any = function (...args: any[]) {
            console.log(`${prefix} Creating instance of ${constructor.name}`, args);
            return new constructor(...args);
        }
        newConstructor.prototype = constructor.prototype;
        return newConstructor;
    }
}
@LogCreation('[CustomerModule]')
class Customer implements ICustomer {

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public role: Role,
        public contact: [string, number]
    ) { }
}
// Manager class with iterator and basic CRUD (in-memory)
class CustomerManager {
    private customers: Customer[] = [];
    addCustomer(c: Customer) {
        this.customers.push(c);
    }
    findByEmail(email: string): Customer | undefined {
        return this.customers.find(c => c.email === email);
    }
    updateCustomer(id: number, patch: Partial<ICustomer>) {
        const idx = this.customers.findIndex(c => c.id === id);

        if (idx >= 0) {
            this.customers[idx] = { ...this.customers[idx], ...patch } as Customer;
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
export { ICustomer, Role, Customer, CustomerManager };
