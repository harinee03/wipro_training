
import BookDispatcher from "./BookDispatcher";

// SimpleEventEmitter (browser-safe)
class SimpleEventEmitter {
  constructor() {
    this.listeners = {};
  }

  // Subscribe to an event
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  // Remove a specific listener
  removeListener(event, callback) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  // Emit (trigger) an event
  emit(event, ...args) {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach((listener) => listener(...args));
  }
}

//  Book Store (Flux Store)

class BookStore extends SimpleEventEmitter {
  constructor() {
    super();
    this.books = [];
  }

  getBooks() {
    return this.books;
  }

addBook(book) {
  const exists = this.books.some(
    (b) =>
      b.title.toLowerCase() === book.title.toLowerCase() &&
      b.author.toLowerCase() === book.author.toLowerCase()
  );

  if (!exists) {
    this.books.push(book);
    console.log(" Store updated:", book);
    this.emit("change");
  } else {
    console.log(" Book already exists, skipping duplicate.");
  }
}


  handleActions(action) {
    console.log(" Store received action:", action.actionType);
    switch (action.actionType) {
      case "ADD_BOOK":
        this.addBook(action.payload);
        break;
      default:
        break;
    }
  }
}

//  Create and register the store
const store = new BookStore();
BookDispatcher.register(store.handleActions.bind(store));

export default store;
