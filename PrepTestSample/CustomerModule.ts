// CustomerModule.ts
// To compile: tsc --target ES2017 --experimentalDecorators CustomerModule.ts
// Ensure tsconfig or command includes "experimentalDecorators": true if using tsconfig.json

// Interface for customer
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

// A simple decorator to log creationnode CustomerModule.js

function LogCreation(prefix: string) {
  return function <T extends { new(...args: any[]): {} }>(constructor: T) {
    const newConstructor: any = function (...args: any[]) {
      console.log(`${prefix} Creating instance of ${constructor.name}`, args);
      return new constructor(...args);
    }
    newConstructor.prototype = constructor.prototype;
    return newConstructor;
  };
}

@LogCreation('[CustomerModule]')
class Customer implements ICustomer {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public role: Role,
    public contact: [string, number]
  ) {}
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
      return true;
    }
    return false;
  }

  removeCustomer(id: number) {
    const idx = this.customers.findIndex(c => c.id === id);
    if (idx >= 0) {
      this.customers.splice(idx, 1);
      return true;
    }
    return false;
  }

  // iterator to iterate customers
  *[Symbol.iterator]() {
    for (const c of this.customers) {
      yield c;
    }
  }

  // return as array
  toArray() {
    return [...this.customers];
  }
}

// Demo usage (this block will run after compilation to JS)
const manager = new CustomerManager();
manager.addCustomer(new Customer(1, 'Alice Rao', 'alice@example.com', Role.Attendee, ['+91', 9876543210]));
manager.addCustomer(new Customer(2, 'Raj Kumar', 'raj@example.com', Role.Organizer, ['+91', 9876501234]));

// iterate using iterator
for (const cust of manager) {
  console.log('Customer:', cust.name, cust.email, cust.role);
}

export { ICustomer, Customer, CustomerManager, Role };
